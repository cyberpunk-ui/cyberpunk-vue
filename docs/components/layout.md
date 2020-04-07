---
title: Layout
---
# Layout 

* `<c-layout>`：wrapper container.
* `<c-header>`：container for headers.
* `<c-aside>`：container for side sections。
* `<c-main>`：container for main sections。
* `<c-footer>`：container for footers。

::: warning
When nested with a `<c-header>` or `<c-footer>`, all its child elements will be vertically arranged. Otherwise horizontally.
:::

::: warning
These components use flex for layout, so please make sure your browser supports it. Besides, `<c-layout>`'s direct child elements have to be one or more of the latter four components. And father element of the latter four components must be a `<c-layout>`.
:::

<ClientOnly>
  <layout-demo></layout-demo>
</ClientOnly>
 
<header-attributes></header-attributes>
<aside-attributes></aside-attributes>
<footer-attributes></footer-attributes>