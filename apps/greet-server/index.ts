// シンプルな挨拶サーバー
// TypeScriptの型とクラスを活かしたサンプル

import * as http from 'http';

class Greeter {
  constructor(private name: string) {}
  greet(): string {
    return `こんにちは、${this.name}さん！`;
  }
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url || '', `http://${req.headers.host}`);
  const name = url.searchParams.get('name') || 'ご主人';
  const greeter = new Greeter(name);
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end(greeter.greet());
});

server.listen(3000, () => {
  console.log('挨拶サーバー起動中やで！ http://localhost:3000');
});
