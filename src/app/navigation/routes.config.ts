export class RoutesConfig {
  static home = "/";
  static auth = "/auth";
  static pingPong = "/ping-pong";
  static statistics = "/statistics";

  static getDefaultLoginRoute() {
    return this.home;
  }
}
