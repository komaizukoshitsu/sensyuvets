---
author: sensyuvets
title: 書き方参考
date: May 14, 2020 8:18 AM
description: マークダウンとシンタックスの例です
categories: ブログ
ridedate: May 14, 2020 8:18 AM
tags:
  - ブログ
---
{{< shared-image dir="news" src="img-4.jpg" >}}

この記事では、Hugoコンテンツファイルで使用できる基本的なMarkdown構文のサンプルを紹介します。また、基本的なHTML要素がHugoテーマでCSSで装飾されているかどうかも示します。

<!--more-->

## H2見出し

次のHTMLの`<h1>`—`<h6>`要素は6レベルのセクション見出しを表しています。`<h1>`は最高のセクションレベル、`<h6>`は最低です。

{{< highlight html >}}

## H2見出し

{{< /highlight >}}

### H3見出し

次のHTMLの`<h1>`—`<h6>`要素は6レベルのセクション見出しを表しています。`<h1>`は最高のセクションレベル、`<h6>`は最低です。

{{< highlight html >}}

### H3見出し

{{< /highlight >}}

#### H4見出し

次のHTMLの`<h1>`—`<h6>`要素は6レベルのセクション見出しを表しています。`<h1>`は最高のセクションレベル、`<h6>`は最低です。

{{< highlight html >}}

#### H4見出し

{{< /highlight >}}

## 段落

私は一生やはりそうした把持人というののところにふりまいうです。とうとう途中を作文学はことにそのまごまごでしだまでに云っからみるうには腐敗考えませですば、ますますにも考えただましまし。

主命が知れたものはすこぶる結果にけっしてうないだ。すこぶる久原さんが意味秩序突然矛盾を云っます毛抜同じ秋彼らか表裏がというご説明ですたたまいから、そうした翌日も私か文学鉱脈にいうで、木下さんの方を向うの私をけっしてお反対とししやつ頭にごお話へするようにいかにご学習を出かけたないて、なおまして威圧が抜かしらしくがいただきた者のもつますた。またまたごモーニングにあるのはますますむやみと考えるうから、その個性がはつけ込むでがという社会に来ば得るうます。その時時代の末こういう是も私上へしましかと嘉納さんが云っましう、主人の今でについてごろかませたでば、人身の日に自分より結果じゃの社会が今朝するがしまえて、そうの毎日がするてそんな後の同時にしでなとしますのたから、恥ずかしいでありからまだ小めなるたものらしくました。しかし春か愉快か講演に知れましょて、今上国が云いてかねず後がお教育の将来へ与えたた。

晩にはもう受けるてすれたないですますて、恐らく多分思い切って呈はぴたり若いたのう。それでもお入会に生れがはみべきのでして、学校をは、必ずしも彼らか飛びから叱らせるですだ済ましれたたとしから、個人はしからいですない。

## 引用

blockquote要素は、別のソースから引用されたコンテンツを表します。オプションで、`footer`または`cite`要素内にある必要がある引用、およびオプションで、注釈や略語などのインライン変更を使用できます。

### 引用（出典なし）

> Tiam, ad mint andaepu dandae nostion secatur sequo quae. **Note** that you can use *Markdown syntax* within a blockquote.

### 引用（出典あり）

> Don't communicate by sharing memory, share memory by communicating.</p> — <cite>Rob Pike[^1]</cite>

[^1]: The above quote is excerpted from Rob Pike's [talk](https://www.youtube.com/watch?v=PAAkCSZUG1c) during Gopherfest, November 18, 2015.

## 表

Tables aren't part of the core Markdown spec, but Hugo supports supports them out-of-the-box.

| Name  | Age |
| ----- | --- |
| Bob   | 27  |
| Alice | 23  |

### 表内のインラインマークダウン

| Inline    | Markdown | In                | Table  |
| --------- | -------- | ----------------- | ------ |
| *italics* | **bold** | ~~strikethrough~~ | `code` |

## Code Blocks

### Code block with backticks

```
html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Example HTML5 Document</title>
</head>
<body>
  <p>Test</p>
</body>
</html>
```

### Code block indented with four spaces

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Example HTML5 Document</title>
</head>
<body>
  <p>Test</p>
</body>
</html>
```

### Code block with Hugo's internal highlight shortcode

{{< highlight html >}}

<!DOCTYPE html>

<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Example HTML5 Document</title>
</head>
<body>
  <p>Test</p>
</body>
</html>
{{< /highlight >}}

## List Types

### Ordered List

1. First item
2. Second item
3. Third item

### Unordered List

* List item
* Another item
* And another item

### Nested list

* Item

1. First Sub-item
2. Second Sub-item

## Other Elements — abbr, sub, sup, kbd, mark

<abbr title="Graphics Interchange Format">GIF</abbr> is a bitmap image format.

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

Press <kbd><kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd></kbd> to end the session.

Most <mark>salamanders</mark> are nocturnal, and hunt for insects, worms, and other small creatures.