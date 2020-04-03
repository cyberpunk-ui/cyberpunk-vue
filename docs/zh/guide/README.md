---
title: 介绍
---
# Cyberpunk Vue
![Build Status](https://travis-ci.org/cyberpunk-ui/cyberpunk-vue.svg?branch=master)
![NPM Download](https://img.shields.io/npm/dt/cyberpunk-vue)
![NPM Version](https://img.shields.io/npm/v/cyberpunk-vue.svg?style=flat)
![license](https://img.shields.io/github/license/cyberpunk-ui/cyberpunk-vue)
![Github Star](https://img.shields.io/github/stars/cyberpunk-ui/cyberpunk-vue?style=social)
::: warning
本项目正在开发中，可能会对API进行升级和改动，故请暂时不要应用在生产项目中
:::
## Install

```shell
npm install cyberpunk-vue
```
```shell
yarn add cyberpunk-vue
```

## Quick Start
```js
import Vue from 'vue';
import cyberpunk from 'cyberpunk-vue';
import 'cyberpunk-vue/lib/cyberpunk-vue.css';

Vue.use(cyberpunk);

// or
import {
  Button,
  Input
  // ...
} from 'cyberpunk-vue';

Vue.use(Button);
Vue.use(Input);
```

## Test Coverage

```shell script
Statements   : 94.35% ( 217/230 )
Branches     : 84.16% ( 85/101 )
Functions    : 96.23% ( 102/106 )
Lines        : 95.39% ( 207/217 )
```

## TodoList
* [x] Components
    * [x] Icon
    * [x] Button
    * [x] Input
    * [x] Grid
    * [x] Layout
    * [x] Message
    * [x] Tabs
    * [x] Popover
    * [x] Collapse
    * [x] Cascader
    * [x] Carousel
    * [x] Menu
    * [x] Pagination
    * [x] Table
    * [x] Upload
    * [x] Sticky
    * [x] Datepicker
    * [x] Scroll
* [x] Complete unit test case coverage 90%+.
* [x] Release first version of NPM
* [ ] Docs
    * [x] Multi-language support for documentation.
    * [ ] Complete Chinese and English README.
    * [ ] Complete documentation for all components.
    * [ ] Optimize the style of the document site.

## Thanks
* [Frank Fang](https://github.com/FrankFang)
* [Shehab Eltawel](https://codepen.io/shehab-eltawel)
* [Hamish Williams](https://codepen.io/HamishMW)
* [Ru Work](https://codepen.io/ru_work)
* [Element UI](https://github.com/ElemeFE/element)
* [Ant Design Vue](https://github.com/vueComponent/ant-design-vue)
* [Cyberpunk 2077](https://www.cyberpunk.net/us/zh-cn/pre-order)

## LICENSE
[MIT](LICENSE)
