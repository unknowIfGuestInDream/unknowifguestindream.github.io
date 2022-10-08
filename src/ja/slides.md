---
title: スライドページ
icon: slides
layout: Slide
---

<!-- markdownlint-disable MD024 MD033 MD051 -->

@slidestart

<!-- .slide: data-transition="slide" -->

## スライドショー

<!-- .element: class="r-fit-text" -->

簡単なスライドデモと便利なヒントをご紹介します。

<!-- .element: class="r-fit-text" -->

> By unknowIfGuestInDream. マウスホイールを下にスクロールして次のスライドをご覧ください。

---

<!-- .slide: data-transition="slide" data-auto-animate -->

## ラベリングスライド

<!-- .element: class="r-fit-text" -->

[👇](#/1/1)

--

<!-- .slide: data-transition="slide" data-auto-animate -->

## ラベリングスライド

<!-- .element: class="r-fit-text" -->

水平方向のスライドをマークするには、`---` を使用します。

<!-- .element: class="fragment fade-in" -->

水平方向のスライドの中で垂直方向のスライドをスペーサーにするには `--` を使用します。

<!-- .element: class="fragment fade-in" -->

`<!-- .slide: ... -->` を使って、スライドに属性を追加する。

<!-- .element: class="fragment fade-in" -->

`<!-- .element: ... -->`を使って、前の html 要素に属性を追加する。

<!-- .element: class="fragment fade-in" -->

---

<!-- .slide: data-transition="slide" data-auto-animate -->

## Markdown

<!-- .element: class="r-fit-text" -->

Markdown 構文による様々なマークアップをスライドで使用することができます。

<!-- .element: class="r-fit-text" -->

--

<!-- .slide: data-auto-animate -->

## Markdown

Markdown 構文による様々なマークアップをスライドで使用することができます。

### こちらは H3

タイトルは、デフォルトで自動的に大文字に変換されます。

これは、**bold**, _italic_, ~~strikethrough~~, [link](https://www.tlcsdm.com) を使った段落で、自動的に行を回り込んでくれます。 だから、長さを気にする必要はないのです。

--

<!-- .slide: data-auto-animate -->

## Markdown

タイトルは、デフォルトで自動的に大文字に変換されます。

リストのデフォルトは `inline-block` です。

- Item
- Item
- Item

1. Item 1
1. Item 2
1. Item 3

--

<!-- .slide: data-auto-animate -->

## Markdown

タイトルは、デフォルトで自動的に大文字に変換されます。

プラグイン `highlight` を有効にすると、コードブロックが自動的にハイライトされます。

```js
const a = 1;
```

--

<!-- .slide: data-auto-animate -->

## Markdown

タイトルは、デフォルトで自動的に大文字に変換されます。

プラグイン `math` を有効にすると、TEX の書式を使った数式も利用できるようになります。

$$
J(\theta_0,\theta_1) = \sum_{i=0}
$$

--

<!-- .slide: data-auto-animate -->

## Markdown

タイトルは、デフォルトで自動的に大文字に変換されます。

⚠**注意**: 表、hr およびその他の非標準的な Markdown 構文はサポートされていません。

---

<!-- .slide: data-transition="slide" data-auto-animate -->

## Layout

<!-- .element: class="r-fit-text" -->

--

<!-- .slide: data-auto-animate  -->

## Layout

<!-- .element: class="r-fit-text" -->

👆 r-fit-text` クラスは、スライドの範囲を超えない範囲で、テキストをできるだけ大きくします。

--

<!-- .slide: data-auto-animate  -->

## Layout

![Logo](/logo.svg)

<!-- .element: class="r-stretch" -->

👆 r-stretch`クラスは、注入された画像やビデオのサイズを制御して、スライドの縦方向の残りのスペースを埋めるのに役立ちます。

--

<!-- .slide: data-auto-animate data-background-color="rgb(70, 70, 255)" -->

## Layout

### 背景

特定のスライドに `data-background` 属性を追加することで、スライドの背景をカスタマイズすることができます。

---

<!-- .slide: data-auto-animate -->

## Fragment

<!-- .element: class="r-fit-text" -->

--

<!-- .slide: data-auto-animate -->

## Fragment

<!-- .element: class="r-fit-text" -->

アニメーションクリップは、スライド内の要素を強調したり、隠したりするために使用します。

要素に `fragment` とアニメーションクラスを追加する必要があります。

--

<!-- .slide: data-auto-animate -->

## Fragment

### Animation class

- `fade-in`
<!-- .element: class="fragment fade-in" -->

- `fade-out`
<!-- .element: class="fragment fade-out" -->

- `fade-up`
<!-- .element: class="fragment fade-up" -->

<!-- list break -->

- `fade-down`
<!-- .element: class="fragment fade-down" -->

- `fade-left`
<!-- .element: class="fragment fade-left" -->

- `fade-right`
<!-- .element: class="fragment fade-right" -->

<!-- list break -->

- `fade-in-then-out`
<!-- .element: class="fragment fade-in-then-out" -->

- `fade-in-then-semi-out`
<!-- .element: class="fragment fade-in-then-semi-out" -->

--

<!-- .slide: data-auto-animate -->

## Fragment

### Animation class

- `grow`
<!-- .element: class="fragment grow" -->

- `shrink`
<!-- .element: class="fragment shrink" -->

- `strike`
<!-- .element: class="fragment strike" -->

<!-- list break -->

- `highlight-red`
<!-- .element: class="fragment highlight-red" -->

- `highlight-green`
<!-- .element: class="fragment highlight-green" -->

- `highlight-blue`
<!-- .element: class="fragment highlight-blue" -->

<!-- list break -->

- `highlight-current-red`
<!-- .element: class="fragment highlight-current-red" -->

- `highlight-current-green`
<!-- .element: class="fragment highlight-current-green" -->

- `highlight-current-blue`
<!-- .element: class="fragment highlight-current-blue" -->

--

<!-- .slide: data-auto-animate -->

## Fragment

### Mutiple fragments

HTML 要素をラップして、複数のアニメーションセグメントを順番に表示することができます。

<span class="fragment fade-in">
  <span class="fragment highlight-red">
    <span class="fragment fade-out">
      Fade in > Turn red > Fade out
    </span>
  </span>
</span>

--

<!-- .slide: data-auto-animate -->

## Fragment

### Order

`data-fragment-index` 属性を使って、要素のアニメーション順序を変更することができます。

異なる要素で同じアニメーションシーケンスを持つことができます。

- 最後に表示されます
<!-- .element: class="fragment" data-fragment-index="3"-->

- 2 番目に表示される
<!-- .element: class="fragment" data-fragment-index="2"-->

<!-- list break -->

- 最初に表示される
<!-- .element: class="fragment" data-fragment-index="1"-->

- 2 番目に表示される
<!-- .element: class="fragment" data-fragment-index="2"-->

---

<!-- .slide: data-transition="slide" data-auto-animate -->

## Transition

<!-- .element: class="r-fit-text" -->

--

<!-- .slide: data-transition="slide" data-auto-animate -->

## Transition

<!-- .element: class="r-fit-text" -->

トランジションは設定の `transition` オプションでグローバルに設定することができます。また、特定のスライドに `data-transition` 属性を追加することでローカルに設定することも可能です。

可能な値。

- none
- fade
- slide

<!-- list break -->

- convex
- concave
- zoom

--

<!-- .slide: data-auto-animate -->

## Transition

<!-- .element: class="r-fit-text" -->

### トランジションアニメーション

隣接するスライドに `data-auto-animate` を追加すると、同じ HTML 要素をトランジション効果でアニメーション化することができます。

---

<!-- .slide: data-transition="slide" data-auto-animate -->

## Functions

<!-- .element: class="r-fit-text" -->

--

<!-- .slide: data-transition="slide" data-auto-animate -->

## Functions

<!-- .element: class="r-fit-text" -->

### Code

プラグイン `highlight` を有効にすると、コードのブロックをハイライトすることができます。

特定の行のハイライトを分散させるために `[a-b|c-d]` 構文を使用することができます。

```js [1-2|3|4]
let a = 1;
let b = 2;
let c = (x) => 1 + 2 + x;
c(3);
```

--

<!-- .slide: data-transition="slide" data-auto-animate -->

## Functions

<!-- .element: class="r-fit-text" -->

### Overview

スライドにフォーカスが合っているときに`Esc`または`O`を押すと、プレビューモードになります。

--

<!-- .slide: data-transition="slide" data-auto-animate -->

## Functions

<!-- .element: class="r-fit-text" -->

### Full Screen

スライドショーにフォーカスがあるときに`F`または`F11`を押すと、フルスクリーンモードになります。

--

<!-- .slide: data-transition="slide" data-auto-animate -->

## Functions

<!-- .element: class="r-fit-text" -->

### Zoom

`alt` (Linux では `ctrl`) を押しながらスライドの任意の要素をクリックすると、その要素が拡大表示されます。

もう一度クリックすると、拡大表示されます。

---

<!-- .element: class="r-fit-text" -->

## The End

@slideend
