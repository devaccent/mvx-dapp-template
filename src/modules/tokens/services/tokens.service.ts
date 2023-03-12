import { EsdtToken } from "../models";
import { AppEnvironment } from "../../../app/environment";

export default class TokensService {
  static TOKENS_PER_PAGE = 3000;
  private static TOKENS_COUNT_ROUTE = `${AppEnvironment.mvx.toolsApiUrl}/growth-api/explorer/headers/tokens`;

  static async getEsdtTokens(): Promise<EsdtToken[]> {
    const numberOfPages = await TokensService.getNumberOfEsdtTokensPages();

    const promises = [];
    for (let i = 1; i <= numberOfPages; i++) {
      promises.push(TokensService.fetchTokensRequest(i));
    }

    return Promise.all([...promises]).then((results) => ([] as EsdtToken[]).concat.apply([], results));
  }

  private static getNumberOfEsdtTokensPages(): Promise<number> {
    return fetch(TokensService.TOKENS_COUNT_ROUTE)
      .then((response) => response.json())
      .then((response) => Math.ceil(response.totalTokens / TokensService.TOKENS_PER_PAGE));
  }

  private static fetchTokensRequest = (pageNumber: number): Promise<EsdtToken[]> => {
    const from = (pageNumber - 1) * TokensService.TOKENS_PER_PAGE;

    const url = new URL("/tokens", AppEnvironment.mvx.apiUrl);
    url.search = `from=${from}&size=${TokensService.TOKENS_PER_PAGE}`;

    return fetch(url)
      .then((response) => response.json())
      .then((items) => items.map((item: Partial<EsdtToken>) => new EsdtToken(item)));
  };
}
