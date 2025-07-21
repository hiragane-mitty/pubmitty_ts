// JSONボディのパース・生成クラス
import { IncomingMessage } from 'http';

export class JsonBodyParser {
  async parse<T>(req: IncomingMessage): Promise<T> {
    return new Promise((resolve, reject) => {
      let data = '';
      req.on('data', chunk => { data += chunk; });
      req.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(e);
        }
      });
      req.on('error', reject);
    });
  }

  stringify(obj: any): string {
    return JSON.stringify(obj);
  }
}
