# Redux
## index.tsx
* `store` を初期化する `createStore(reducer, initialState)`
* `provider`から`store`をpropsとして渡す


## actions.ts
* action: “どんなイベントが起こったのかを表現するプレーンなオブジェクト”
* イベントの種類を表すプロパティ: `type`
* 値を格納するプロパティ: `amout`(イベントに合わせて名前付け）
* `type` の型定義でタイポしないように文字型リテラル（as const)にする
* action creator : イベント発生時には生の値(ex: `{type: 'ADD, amount: 10}` )を入れず action creator関数の戻り値を使う
)
抜粋:: 大岡由佳  “りあクト！ TypeScriptで始めるつらくないReact開発 第3.1版【Ⅲ. React応用編】”。 Apple Books  
 dispatch
