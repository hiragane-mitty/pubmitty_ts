// 独自ヘッダによる分岐クラス
import { IncomingMessage, ServerResponse } from 'http';
import { CustomRequestHeaders, CustomResponseHeaders } from './types';

export class CustomHeaderRouter {
  handle(req: IncomingMessage, res: ServerResponse, reqHeaders: CustomRequestHeaders) {
    // 独自ヘッダによる分岐例
    if (reqHeaders['x-feature-flag'] === 'special') {
      res.setHeader('x-server-id', 'server-special');
      res.setHeader('x-response-time', Date.now().toString());
      res.setHeader('x-api-version', '2.0.0');
    } else {
      res.setHeader('x-server-id', 'server-default');
      res.setHeader('x-response-time', Date.now().toString());
      res.setHeader('x-api-version', '1.0.0');
    }
  }
}
