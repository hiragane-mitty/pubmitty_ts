// 簡単な天気CLIアプリ
// TypeScriptの型や関数を活かしたサンプル

type Weather = '晴れ' | 'くもり' | '雨' | '雪';

function getWeather(city: string): Weather {
  const weathers: Weather[] = ['晴れ', 'くもり', '雨', '雪'];
  // ダミーで都市名の長さで天気決定
  return weathers[city.length % weathers.length];
}

const city = process.argv[2] || '大阪';
console.log(`${city}の天気は${getWeather(city)}やで！`);
