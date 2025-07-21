// Loggerクラス：シングルトンパターンと静的メソッド
export class Logger {
  private static _instance: Logger;
  private constructor() {}

  static get instance() {
    if (!Logger._instance) {
      Logger._instance = new Logger();
    }
    return Logger._instance;
  }

  log(message: string) {
    console.log(`[LOG] ${message}`);
  }
}
