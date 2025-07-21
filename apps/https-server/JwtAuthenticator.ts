// JWT認証クラス
import { IncomingMessage } from 'http';
import * as jwt from 'jsonwebtoken';

export class JwtAuthenticator {
  constructor(private allowedTokens: string[]) {}

  authenticate(req: IncomingMessage): boolean {
    const auth = req.headers['authorization'];
    if (!auth || !auth.startsWith('Bearer ')) return false;
    const token = auth.slice(7);
    // 本来はjwt.verifyで検証するが、ここでは許可リストで判定
    return this.allowedTokens.includes(token);
  }
}
