# cyberpunk-vue
cyberpunk-ui base vue.js

[![Build Status](https://travis-ci.org/cyberpunk-ui/cyberpunk-vue.svg?branch=master)](https://travis-ci.org/cyberpunk-ui/cyberpunk-vue)
[![NPM Download](https://img.shields.io/npm/dt/cyberpunk-vue)](https://www.npmjs.com/package/cyberpunk-vue)
[![NPM Version](https://img.shields.io/npm/v/cyberpunk-vue.svg?style=flat)](https://www.npmjs.com/package/cyberpunk-vue)

## Documents

* [https://cyber.punkui.com/](https://cyber.punkui.com/)

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

Vue.use(cyberpunk);

// or
import {
  Select,
  Button
  // ...
} from 'cyberpunk-vue';

Vue.component(Select.name, Select);
Vue.component(Button.name, Button);
```

## Test Coverage

```shell script
Statements   : 94.35% ( 217/230 )
Branches     : 84.16% ( 85/101 )
Functions    : 96.23% ( 102/106 )
Lines        : 95.39% ( 207/217 )
```

## TodoList
* [ ] Components
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
    * [ ] Sticky(dev...)
    * [ ] Datepicker
    * [ ] Scroll
* [x] Complete unit test case coverage 90%+.
* [x] Release first version of NPM
* [ ] Docs
    * [x] Multi-language support for documentation.
    * [ ] Complete Chinese and English README.
    * [ ] Complete documentation for all components.
    * [ ] Optimize the style of the document site.

## Thanks
* [Shehab Eltawel](https://codepen.io/shehab-eltawel)
* [Hamish Williams](https://codepen.io/HamishMW)
* [Ru Work](https://codepen.io/ru_work)
* [Element UI](https://github.com/ElemeFE/element)
* [Ant Design Vue](https://github.com/vueComponent/ant-design-vue)
* [Cyberpunk 2077](https://www.cyberpunk.net/us/zh-cn/pre-order)

## LICENSE
[MIT](LICENSE)
