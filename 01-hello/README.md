# 6-1 Eslint
## Eslintの環境をつくる
### パッケージの最新化
`yarn upgrade-interactive --latest`

yarn upgrade コマンドのアップグレードの対象から TypeScript が外されたため、別途アップグレードを実行

`yarn add typescript@latest`

### eslint設定ファイルを作成
`yarn eslint --init` で対話的に作成
```
❯ yarn eslint --init
? How would you like to use ESLint? 
✔ To check syntax, find problems, and enforce code style

? What type of modules does your project use?
✔ JavaScript modules (import/export)

? Which framework does your project use?
✔ React

? Does your project use TypeScript?
✔ Yes

? Where does your code run?
✔ Browser

? How would you like to define a style for your project?
✔ Use a popular style guide

? Which style guide do you want to follow?
✔ Airbnb: https://github.com/airbnb/javascript

? What format do you want your config file to be in?
✔ JavaScript

Checking peerDependencies of eslint-config-airbnb@latest
The config that you've selected requires the following dependencies:

eslint-plugin-react@^7.21.5 @typescript-eslint/eslint-plugin@latest eslint-config-airbnb@latest eslint@^5.16.0 || ^6.8.0 || ^7.2.0 eslint-plugin-import@^2.22.1 eslint-plugin-jsx-a11y@^6.4.1 eslint-plugin-react-hooks@^4 || ^3 || ^2.3.0 || ^1.7.0 @typescript-eslint/parser@latest

? Would you like to install them now with npm?
✔ No // パッケージ管理をYarnで統一するため後で改めてインストールする
```
コマンドがエラーで終わった（`Oops! Something went wrong! :(`）が、とりあえず気にしない

init でインストールしなかった拡張ルールセットとプラグインをインストール
```
❯ yarn add -D eslint-plugin-react@^7.21.5 @typescript-eslint/eslint-plugin@latest eslint-config-airbnb@latest eslint@^5.16.0 || ^6.8.0 || ^7.2.0 eslint-plugin-import@^2.22.1 eslint-plugin-jsx-a11y@^6.4.1 eslint-plugin-react-hooks@^4 || ^3 || ^2.3.0 || ^1.7.0 @typescript-eslint/parser@latest
❯ typesync
❯ yarn
```

### ESlint の運用ルールをカスタマイズする
#### 今回は eslint-config-airbnb
* Airbnb JavaScript Style Guide に準拠する ESlintの共有設定
* サードパーティ提供としてはメジャー
* かなり厳格なルールが適用されているので嫌がる開発者も多い
* 最初から導入しておけば障壁も少ない

既存のプロジェクト追加する場合は依存するパッケージも含め下記のようにインストール
```
yarn add -D eslint-config-airbnb eslint-plugin-import \ eslint-plugin-jsx-a11y eslint-plugin-react-hooks
```

npmパッケージが依存しているものはnpm公式や下記コマンドで確認して `.eslintrc.js`の`extends`に追記
```
❯ npm info eslint-config-airbnb peerDependencies
 
{
  eslint: '^5.16.0 || ^6.8.0 || ^7.2.0',
  'eslint-plugin-import': '^2.22.1',
  'eslint-plugin-jsx-a11y': '^6.4.1',
  'eslint-plugin-react': '^7.21.5',
  'eslint-plugin-react-hooks': '^4 || ^3 || ^2.3.0 || ^1.7.0'
}
```


ESlint の組み込みルールについては [List of available rules - ESLint](https://eslint.org/docs/rules/) を参照

### VS Code 拡張の ESLint をインストールしてから Settings.json に追記
```json
{
// ファイル保存時に VS Code 内臓のものではなく ESLint の自動整形が走るようにする
  "editor.codeActionsOnsave": {
    "source.fixAll.eslint": true
  },
  "editor.formatOnSave": false,
  "eslint.packageManager": "yarn",
// プロジェクトを開いたときそこに TypeScript がインストールされていた場合
// 内蔵のものとどちらを使うかを VS Code に尋ねさせるかどうか（内蔵はバージョンが古め）
  "typescript.enablePromptUseWorkspaceTsdk": true,
// 最初から強制的にプロジェクト側の TypeScript を使わせたい場合
  "typescript.tsdk": "./node_modules/typescript/lib",
}
```

#### lint の無効化コメント
##### 一時的に無効化したいとき
開始: `/* eslint-disable react/jsx-one-expression-per-line */`

終了: `/* eslint-enable react/jsx-one-expression-per-line */`

##### 1行だけ無効化したいとき
該当する行にコメントとして: `// eslint-disable-line`

該当行の直前の行に: `// eslint-disable-next-line`

### lint実行してみて失敗したとき
* 必要なパッケージをインストールする `yarn add package-name@latest`
* バージョン上げる `yarn upgrade-interactive --latest`

## Prettier の環境を作る
ESLint とバッティングしないよう調整が必要
### インストール
* prettier: prettier本体
* eslint-config-prettier: prettierと競合する可能性のある ESLint の各種ルールを無効化する共有設定
```
❯ yarn add -D prettier eslint-config-prettier
❯ (typesync)  // package.json に指定してたら自動で typesync する
❯ yarn
```
### 各種設定
* `.eslintrc.js` の extends 最下行に "prettier" を追加（ルール上書きのため順番大事に）
* `.prettierrc` を作成

### 衝突ルールがないか確認
```
❯ npx eslint-config-prettier 'src/**/*.{js,jsx,ts,tsx}'
No rules that are unnecessary or conflict with Prettier were found.
```

### VS Code に Prettier 拡張をインストールして Settings.json に追記
```json
"editor.defaultFormatter": "esbenp.prettier-vscode",  // 拡張をデフォルトフォーマッタに
// 拡張子ごとに 保存と同時に整形 を定義
"[graphql]": {
"editor.formatOnSave": true
},
"[javascript]": {
"editor.formatOnSave": true
},
"[javascriptreact]": {
"editor.formatOnSave": true
},
"[json]": {
"editor.formatOnSave": true
},
"[typescript]": {
"editor.formatOnSave": true
},
"[typescriptreact]": {
"editor.formatOnSave": true
},
```

## stylelint
### install
* [stylelint](https://stylelint.io): CSS 用のlinter. stylelint本体.
* [styleliny-config-standard](https://github.com/stylelint/stylelint-config-standard): stylelint公式による標準の共有設定
* [stylelint-order](https://github.com/hudochenkov/stylelint-order): stylelintの並び順に関するルールセットのプラグイン
* [stylelint-config-recess-order](https://github.com/stormwarning/stylelint-config-recess-order): RECESSにもとづく CSS の並べ替えのための共有設定
(RCESS(リセス): Twitter社が提供してたCSSのコード品ツール)
```
❯ yarn add -D stylelint stylelint-config-standard stylelint-order stylelint-config-recess-order
❯ (typesync)
❯ yarn
```

### 設定ファイル作成
`.stylelintrc.js`を作成

### VS Code 拡張を入れて Settings.json に追加
```json
{
+  "css.validate": false,
+  "less.validate": false,
+  "scss.validate": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
+   "source.fixAll.stylelint": true
  },
  "editor.formatOnSave": false,
```

## その他プラグイン
今回はアロー関数に統一するプラグイン: eslint-plugin-prefer-arrow を追加する
### インストール
```
yarn -D add eslint-plugin-prefer-arrow
```

### 設定ファイルに追記
`.eslintrc.json` 差分参照

### 秘伝のタレにならないように

linter 本体やプラグインが提供してる共有設定や eslint-config-airbnb などは、バージョン更新で下方互換性のない変更をけっこう入れてくる。パッケージをバージョン更新したら新ルールが追加・適用されてたり、これまであったルールが非推奨になってたりなんてことがよくあるので随時見直す必要がある。

不要な拡張ルールセットやプラグインは導入せず、カスタマイズは最小限にとどめて、常に自分が中身を把握しておけるよう設定はできるだけシンプルにしておくこと。
