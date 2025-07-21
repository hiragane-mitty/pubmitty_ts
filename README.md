
# pubmitty_ts

## Node.jsとnpmの最新版インストール手順

### Windowsの場合
1. [公式サイト](https://nodejs.org/ja) から最新版のインストーラー（LTS推奨）をダウンロードして実行する。
2. インストール後、コマンドプロンプトやPowerShellで以下を実行してバージョン確認：
	```sh
	node -v
	npm -v
	```


### Macの場合（Homebrew推奨）
1. ターミナルで以下を実行：
	```sh
	brew install node
	node -v
	npm -v
	```

### Linux（Debian/Ubuntu系）
1. ターミナルで以下を実行：
	```sh
	sudo apt update
	sudo apt install nodejs npm
	node -v
	npm -v
	```


### n（Node.jsバージョン管理ツール・シンプル派向け）
1. npmでnをグローバルインストール
	```sh
	npm install -g n
	```
2. 最新版Node.jsをインストール
	```sh
	n latest
	node -v
	npm -v
	```

---
ご主人、これでNode.jsとnpmの最新版インストールもバッチリやで！
