// リクエスト全体のハンドラ
import { IncomingMessage, ServerResponse } from 'http';
import { JwtAuthenticator } from './JwtAuthenticator';
import { CustomHeaderRouter } from './CustomHeaderRouter';
import { JsonBodyParser } from './JsonBodyParser';

import { CustomRequestHeaders, RequestBody, ResponseBody } from './types';
import { z } from 'zod';

// zodスキーマ定義
const RequestBodySchema = z.object({
  uuid: z.string().uuid(),
  count: z.number().int().min(1).max(128),
  users: z.array(z.object({
    userId: z.number().int(),
    username: z.string()
  }))
});

export class RequestHandler {
  constructor(
    private jwtAuth: JwtAuthenticator,
    private headerRouter: CustomHeaderRouter,
    private jsonParser: JsonBodyParser
  ) {}

  async handle(req: IncomingMessage, res: ServerResponse) {
    // JWT認証
    if (!this.jwtAuth.authenticate(req)) {
      res.writeHead(401, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Unauthorized' }));
      return;
    }

    // 独自ヘッダ取得
    const reqHeaders: CustomRequestHeaders = {
      'x-client-id': req.headers['x-client-id'] as string || '',
      'x-request-type': req.headers['x-request-type'] as string || '',
      'x-feature-flag': req.headers['x-feature-flag'] as string || ''
    };

    // JSONボディパース

    let body: RequestBody;
    try {
      const raw = await this.jsonParser.parse<unknown>(req);
      const parsed = RequestBodySchema.safeParse(raw);
      if (!parsed.success) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ error: 'Invalid request body', details: parsed.error.issues }));
        return;
      }
      body = parsed.data;
    } catch (e) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Invalid JSON', details: e instanceof Error ? e.message : e }));
      return;
    }

    // 独自ヘッダによる分岐・レスポンスヘッダ付与
    this.headerRouter.handle(req, res, reqHeaders);

    // レスポンス生成
    const response: ResponseBody = {
      status: 'ok',
      result: { received: body, headers: reqHeaders }
    };
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(this.jsonParser.stringify(response));
  }
}
