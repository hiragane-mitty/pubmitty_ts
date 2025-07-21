// サーバ起動エントリーポイント
import { HttpsServer } from './HttpsServer';
import { RequestHandler } from './RequestHandler';
import { JwtAuthenticator } from './JwtAuthenticator';
import { CustomHeaderRouter } from './CustomHeaderRouter';
import { JsonBodyParser } from './JsonBodyParser';
import * as fs from 'fs';

// 許可するJWT（ダミー）
const allowedTokens = ['your-allowed-jwt-token'];

const jwtAuth = new JwtAuthenticator(allowedTokens);
const headerRouter = new CustomHeaderRouter();
const jsonParser = new JsonBodyParser();
const handler = new RequestHandler(jwtAuth, headerRouter, jsonParser);

const options: import('https').ServerOptions = {
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.crt'),
  minVersion: 'TLSv1.3'
};

const server = new HttpsServer(handler, options);
server.listen(8443, () => {
  console.log('HTTPSサーバ起動中やで！ https://localhost:8443');
});
