# React の自己学習をするリポジトリ
> 参考: 大岡由佳 りあクト！ TypeScriptで始めるつらくないReact開発 第3.1版 
### Create React App (npx経由) で プロジェクト作成
```
npx create-react-app prj-name --template typescript
```
### `yarn start`
* 開発モードでアプリを実行する
* デフォルトブラウザで[http://localhost:3000](http://localhost:3000)が表示される
* ホットリロードあり
* コンソールでもlintエラーが確認できる

### npx コマンド
* npmパッケージで提供されているコマンドを実行するもの
* 該当パッケージがマシンにインストールされていればそれを, なければ最新版をダウンロードしてきて実行する
* ダウンロード実行の場合は実行後そのコマンドのパッケージをきれいに削除してくれる

### `yarn fix`
Prettier と ESLint と stylelint による自動補完

### `yarn lint:conflict`
Prettier と ESLint の競合を確認できる
