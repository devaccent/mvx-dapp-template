import axios from "axios";

import { StatisticsType } from "./types";
import { AppEnvironment } from "../../app/environment";

type ReturnType = {
  statistics: StatisticsType;
}[];

export class StatisticsService {
  private static PRICE_PATH = "/growth-api/charts";

  static getStatistics() {
    const params = {
      baseURL: AppEnvironment.mvx.toolsApiUrl,
      params: {
        types: "price",
      },
    };

    return axios.get<ReturnType>(this.PRICE_PATH, params).then((response) => response.data[0].statistics);
  }
}
