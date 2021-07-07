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

## 運用フロー git-flow の練習
https://danielkummer.github.io/git-flow-cheatsheet/index.ja_JP.html
### 0.0. git-flow をインストール
https://github.com/nvie/gitflow

### 0.1. git flow 初期設定
```
❯ git flow init

Which branch should be used for bringing forth production releases?
   - ch11/redux
   - ch6/add_eslint
   - ch6/add_other_plugins
   - ch6/add_prettier
   - develop
   - main
Branch name for production releases: [main] 

Which branch should be used for integration of the "next release"?
   - ch11/redux
   - ch6/add_eslint
   - ch6/add_other_plugins
   - ch6/add_prettier
   - develop
Branch name for "next release" development: [develop] 

How to name your supporting branch prefixes?
Feature branches? [feature/] ch
Bugfix branches? [bugfix/] 
Release branches? [release/] 
Hotfix branches? [hotfix/] 
Support branches? [support/] 
Version tag prefix? [] 
Hooks and filters directory? [/Users/seiya/study/react-study/riakuto31/react-study-2021/.git/hooks] 
```

### 1. feature ブランチで開発
どこのブランチにいても**必ず'develop'をベースに**新規ブランチ（ブランチ名の頭に'ch'が付く）を作成してcheckoutする
```
❯ git flow feature start <ch以降のブランチ名(e.g. 00/add_template)>
Switched to a new branch 'ch00/add_template'

Summary of actions:
- A new branch 'ch00/add_template' was created, based on 'develop'
- You are now on branch 'ch00/add_template'

Now, start committing on your feature. When done, use:

     git flow feature finish 00/add_template

```
わりとめんどいしfinishコマンド不要なら
```
git checkout develop
git checkout -b ch00/add_template
```
のほうが慣れてる気がする。  
とりあえず
* develop をベースに新規開発ブランチを作成する(pushする前ならrebaseでもいい)
* 新規開発ブランチ名の先頭はfeature/(ここではchxx/)にする
* PR のマージ先は必ず develop にする
を守れば良い気がする。  

`git flow feature start` でつくったブランチもベースは **origin** ではなく **local** の develop となる  
のでPRつくるときに **マージ先をdevelop** にしてみて  
「 Can’t automatically merge.」(origin/developと競合してる状態）だったら  
ローカルで pull(fetch + merge)/pull --rebase(fetch + rebase) origin develop してpush( -f)する。

### 2. 開発してコミットする
```
git status
git add .
git commit -m "commit message"
```

### 3. finish せずに publish か push して PR をつくる
```
git push origin ch00/add_template
```
まだリモートリポジトリにブランチがpushされてなくてpublishしたいときは
```
git flow feature publish 00/add_template
```
* PR のマージ先は必ず develop にする（大事なことなので2回言いました）
### 4. PR(feature)をdevelopにmergeしてdevelopから release ブランチを切る
```
git flow release start <branch name(version no)> [BASE]
```
[BASE]はオプションで 'develop'ブランチの特定のCommitのハッシュ値を指定します。指定がない場合はHEADが使われます。
```
git checkout develop
git checkout -b release/v0.7.3
```
でもいいと思う。
このreleaseブランチで package.jsonなど version: n.n.n を更新してコミット
```
git add ./package.json
git commit -m "Update version `v0.7.3`
```
### 5. release ブランチを master にマージ（リリース）
releaseはdevelopとmasterにマージされ、masterへのマージコミットにはタグの設定もある。
developへのマージコミットにはリリースタグ用コメント `Merge tag 'ver1.2' into develop`がデフォになる。
```
git flow release finish v0.7.3
```
