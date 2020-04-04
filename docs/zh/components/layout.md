---
title: Layout 布局
---
# Layout 布局 

* `<c-layout>`：外层容器。
* `<c-header>`：顶栏容器。
* `<c-aside>`：侧边栏容器。
* `<c-main>`：主要区域容器。
* `<c-footer>`：底栏容器。

::: warning
当子元素中包含 `<c-header>` 或 `<c-footer>` 时，全部子元素会垂直上下排列，否则会水平左右排列。
:::

::: warning
以上组件采用了 flex 布局，使用前请确定目标浏览器是否兼容。此外，`<c-layout>` 的子元素只能是后四者，后四者的父元素也只能是 `<c-layout>`。
:::

<ClientOnly>
  <layout-demo-cn></layout-demo-cn>
</ClientOnly>

<header-attributes-cn></header-attributes-cn>
<aside-attributes-cn></aside-attributes-cn>
<footer-attributes-cn></footer-attributes-cn>