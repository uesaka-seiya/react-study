# React の自己学習をするリポジトリ
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

### `yarn lint`
ESLint に怒られる

### `yarn lint:fix`
ESLint による自動補完

### `yarn format`
Prettier が整形してくれる

### `yarn run fix`
Prettier と ESLint が修正してくれる

### `yarn lint:conflict`
Prettier と ESLint の競合を確認できる
