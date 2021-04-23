module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    // 共有設定
    // ここに記述した共有設定間でルール設定が重複している場合
    // リストの後ろに記述されたほうが優先されるので順番に気をつける
    // 他のルールセットと依存の順番がある場合はそれぞれドキュメントで言及してるはずなので要確認
    "extends": [
        "plugin:react/recommended",
        "airbnb",
        "airbnb/hooks",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:import/typescript",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "prettier"
    ],
    // パーサ: ソースコードを特定の言語仕様に沿って解析してくれるライブラリ
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "project": "./tsconfig.eslint.json",  // パーサにわたすオプションを定義
        "sourceType": "module",
        "tsconfigRootir": "__dirname",
    },
    // ESlint の組み込みルール以外に独自のルールを追加するもの
    // 推奨の共有設定とパッケージングして提供されることが多い
    // インストールしただけでなくここに追加しないと適用されない
    "plugins": [
        "@typescript-eslint",
        "import",
        "jsx-a11y",
        "prefer-arrow",
        "react",
        "react-hooks",
    ],
    root: true,  // <- デフォルト（親ディレクトリの設定ファイルまで読み込む）抑止用
    // rules: 適用する個々のルールとエラーレベルや例外などその設定値を記述する
    // たいていは extends の一部をを個別で無効化したり例外を設けるときに使う
    "rules": {
        // occur error in `import React from 'react'` with react-scripts 4.0.3
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': [
            'error',
        ],
        "lines-between-class-members": [
            "error",
            "always",
            {
                exceptAfterSingleLine: true,  // メンバが1行記述なら空行不要とする
            },
        ],
        "no-void": [ // Effect Hook のために void文を使えるようにする
            "error",
            {
                allowAsStatement: true,
            },
        ],
        "padding-line-between-statements": [
            "error",
            {
                blankLine: "always",
                prev: "*",
                next: "return",  // return文の前には常に空行
            },
        ],
        "@typescript-eslint/no-unused-vars": [  // 使用していない変数の定義を許さないルール
            "error",
            {
                "vars": "all",
                "args": "after-used",
                "argsIgnorePattern": "_",   // 変数名が _ で始まるときだけ許容
                "ignoreRestSiblings": false,
                "varsIgnorePattern": "_",
            },
        ],
        "import/extensions": [  // インポートの際のファイル拡張子を記述するかを定義
            "error",
            "ignorePackages",  // npm パッケージ以外のファイルについて
            // .js、.jsx、.ts、.tsx のファイルのみ拡張子を省略（他は拡張子を書かせる）
            {
                js: "never",
                jsx: "never",
                ts: "never",
                tsx: "never",
            },
        ],
        "react/jsx-filename-extension": [ // JSXのファイル拡張子を制限
            "error",
            {
                extensions: [".jsx", ".tsx"],  // tsx を追加
            },
        ],
        // JSX で component を呼ぶときの props の記述にスプレッド構文を許さないルール
        "react/jsx-props-no-spreading": [
            "error",
            {
                html: "enforce",
                custom: "enforce",
                // <Foo {...{ bar, baz } /}> のように個々のprops を明記する書き方のみ許容
                explicitSpread: "ignore",
            },
        ],
        // JSX 記述を使用する場合に react モジュールを React としてインポートすることを強制
        "react/react-in-jsx-scope": "off",  // 新しいJSX変換形式ではインポート不要になるためOFF
        "prefer-arrow/prefer-arrow-functions": [
            "error",
            {
                disallowPrototype: true,
                singleReturnOnly: false,
                classPropertiesAllowed: false,
            },
            ],
    },
    "overrides": [ // 任意の glob パターンにマッチするファイルのみルールの適用を上書きできる
        {
            "files": ["*.tsx"],
            "rules": {
                // コンポーネントの props に型チェックを行うための propTypes プロパティの定義を強制するルール
                "react/prop-types": "off",  // TypeScript の場合は不要なので拡張子が.tsxの場合は無効化
            },
        },
    ],
    "settings": {
        "import/resolver": {
            node: {
                paths: ["src"],
            },
        },
    },
};
