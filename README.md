# cyberpunk-vue
cyberpunk-ui base vue.js

[![Build Status](https://travis-ci.org/cyberpunk-ui/cyberpunk-vue.svg?branch=master)](https://travis-ci.org/cyberpunk-ui/cyberpunk-vue)
[![NPM Download](https://img.shields.io/npm/dt/cyberpunk-vue)](https://www.npmjs.com/package/cyberpunk-vue)
[![NPM Version](https://img.shields.io/npm/v/cyberpunk-vue.svg?style=flat)](https://www.npmjs.com/package/cyberpunk-vue)

## Documents

* [Docs] https://cyber.punkui.com/
* [Blog] https://ylzon.com

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
* [ ] Complete unit test case coverage 90%+.
* [ ] Release first version of NPM and Github Package.
* [ ] Docs
    * [x] Multi-language support for documentation.
    * [ ] Complete Chinese and English README.
    * [ ] Complete documentation for all components.
    * [ ] Optimize the style of the document site.
   

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
Statements   : 60.53% ( 23/38 )
Branches     : 42.31% ( 11/26 )
Functions    : 66.67% ( 8/12 )
Lines        : 62.86% ( 22/35 )
```

## Thanks
* [Shehab Eltawel](https://codepen.io/shehab-eltawel)
* [Hamish Williams](https://codepen.io/HamishMW)
* [Ru Work](https://codepen.io/ru_work)
* [Element UI](https://github.com/ElemeFE/element)
* [Ant Design Vue](https://github.com/vueComponent/ant-design-vue)
* [Cyberpunk 2077](https://www.cyberpunk.net/us/zh-cn/pre-order)

## LICENSE
[MIT](LICENSE)
