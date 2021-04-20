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
