// サーバ本体
import * as https from 'https';
import { readFileSync } from 'fs';
import { RequestHandler } from './RequestHandler';

export class HttpsServer {
  private server: https.Server;

  constructor(
    private handler: RequestHandler,
    private options: https.ServerOptions
  ) {
    this.server = https.createServer(this.options, (req, res) => {
      this.handler.handle(req, res);
    });
  }

  listen(port: number, cb?: () => void) {
    this.server.listen(port, cb);
  }
}
