// 型定義：リクエスト/レスポンスのJSONと独自ヘッダ


// UUIDはstring型で表現（バリデーションはzod等で実行時チェック）
export interface RequestBody {
  uuid: string; // 128bit UUID仕様の文字列
  count: number; // 1～128の有効範囲
  users: Array<{
    userId: number;
    username: string;
  }>;
}

export interface ResponseBody {
  status: string;
  result: any;
}

export type CustomRequestHeaders = {
  'x-client-id': string;
  'x-request-type': string;
  'x-feature-flag': string;
  // 他にも必要なら追加
};

export type CustomResponseHeaders = {
  'x-server-id': string;
  'x-response-time': string;
  'x-api-version': string;
};
