module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    // 共有設定
    // ここに記述した共有設定間でルール設定が重複している場合
    // リストの後ろに記述されたほうが優先される
    "extends": [
        "plugin:react/recommended",
        "airbnb"
    ],
    // パーサ: ソースコードを特定の言語仕様に沿って解析してくれるライブラリ
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    // ESlint の組み込みルール以外に独自のルールを追加するもの
    // 推奨の共有設定とパッケージングして提供されることが多い
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    // 適用する個々のルールとエラーレベルや例外などその設定値を記述する
    // たいていは extends の一部をを個別で無効化したり例外を設けるときに使う
    "rules": {
    }
};
