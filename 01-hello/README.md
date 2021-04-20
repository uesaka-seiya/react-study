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

VS Code 拡張の ESLint をインストールしてから Settings.json に追記
```
<!-- ファイル保存時に VS Code 内臓のものではなく ESLint の自動整形が走るようにする -->
  "editor.codeActionsOnsave": {
    "source.fixAll.eslint": true
  },
  "editor.formatOnSave": false,
  "eslint.packageManager": "yarn",
<!-- プロジェクトを開いたときそこに TypeScript がインストールされていた場合、
内蔵のものとどちらを使うかを VS Code に尋ねさせるかどうか（内蔵はバージョンが古め） -->
  "typescript.enablePromptUseWorkspaceTsdk": true,
<!-- 最初から強制的にプロジェクト側の TypeScript を使わせたい場合 -->
  "typescript.tsdk": "./node_modules/typescript/lib",
```

#### lint の無効化コメント
一時的に無効化したいとき
開始
`* eslint-disable react/jsx-one-expression-per-line */`

終了
`* eslint-enable react/jsx-one-expression-per-line */`

1行だけ無効化したいとき

該当する行にコメントとして↓
`// eslint-disable-line`

該当行の直前の行に↓
`// eslint-disable-next-line`
