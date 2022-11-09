---
title: 'zenn-editorの動作確認'
excerpt: 'zenn-editorが適用されているかの確認ページ'
coverImage: '/assets/blog/hello-world/cover.jpg'
date: '2022-11-03T06:35:07.322Z'
author:
  name: okyawa
  picture: '/assets/blog/authors/tim.jpeg'
ogImage:
  url: '/assets/blog/hello-world/cover.jpg'
tags: 
  - 'tag1'
  - 'tag2'
---

# 埋め込みコンテンツ

https://twitter.com/okyawa

https://www.instagram.com/p/CkKZB0fr-Zt/

https://flic.kr/p/2nTU4b2

https://www.youtube.com/watch?v=WRVsOCh907o

# コード

```ts
import mh2 from 'zenn-markdown-html';

export default async function markdownToHtml(markdown: string) {
  return mh2(markdown)
}
```

# メッセージ

:::message
メッセージをここに
:::

:::message alert
警告メッセージをここに
:::

# KaTeXによる数式

$$
e^{i\theta} = \cos\theta + i\sin\theta
$$

# 見出し

```
# 見出し1
## 見出し2
### 見出し3
#### 見出し4
```

# リスト

```
- Hello!
- Hola!
  - Bonjour!
  * Hi!
```

- Hello!
- Hola!
  - Bonjour!
  * Hi!

## 番号付きリスト

```
1. First
2. Second
```

1. First
2. Second

# ダイアグラム

```mermaid
graph TB
    A[Hard edge] -->|Link text| B(Round edge)
    B --> C{Decision}
    C -->|One| D[Result one]
    C -->|Two| E[Result two]
```

# フローチャート

```mermaid
graph LR
   a --> b & c--> d
```