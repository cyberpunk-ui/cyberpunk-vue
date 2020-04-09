[English](./README.md) | 简体中文
<h1 align="center">Cyberpunk Vue</h1>
<div align="center">

[![Build Status](https://travis-ci.org/cyberpunk-ui/cyberpunk-vue.svg?branch=master)](https://travis-ci.org/cyberpunk-ui/cyberpunk-vue)
[![NPM Download](https://img.shields.io/npm/dt/cyberpunk-vue)](https://www.npmjs.com/package/cyberpunk-vue)
[![NPM Version](https://img.shields.io/npm/v/cyberpunk-vue.svg?style=flat)](https://www.npmjs.com/package/cyberpunk-vue)
[![license](https://img.shields.io/github/license/cyberpunk-ui/cyberpunk-vue)](https://github.com/cyberpunk-ui/cyberpunk-vue/blob/master/LICENSE)
[![Github Star](https://img.shields.io/github/stars/cyberpunk-ui/cyberpunk-vue?style=social)](https://github.com/cyberpunk-ui/cyberpunk-vue)

![](https://github.com/cyberpunk-ui/cyberpunk-vue/blob/master/public/logo.jpg?raw=true)
</div>

> 本项目正在开发中，可能会对API进行升级和改动，请暂时不要应用在生产项目中
## 文档

* [https://cyber.punkui.com/](https://cyber.punkui.com/)

## 特性

* 完整的黑暗风格UI控件配色，帮助你快速搭建页面
* 享受Vue + Webpack的开发经验，并在手机和PC上使用
* 使用Chai + mocha作为单元测试工具,具备90%+测试覆盖率

## 安装

```shell
npm install cyberpunk-vue
```
```shell
yarn add cyberpunk-vue
```

## 快速上手
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

## 支持环境

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera |
| --- | --- | --- | --- | --- |
| IE9, IE10, IE11, Edge | last 2 versions | last 2 versions | last 2 versions | last 2 versions |

## 版本

* ![NPM Version](https://img.shields.io/npm/v/cyberpunk-vue.svg?style=flat)
* ![GitHub package.json version](https://img.shields.io/github/package-json/v/cyberpunk-ui/cyberpunk-vue?label=GitHub)


## 测试覆盖率

```shell script
Statements   : 94.35% ( 217/230 )
Branches     : 84.16% ( 85/101 )
Functions    : 96.23% ( 102/106 )
Lines        : 95.39% ( 207/217 )
```

## 开发计划
* [x] 组件
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
* [x] 单元测试用例覆盖率90％+
* [x] 发布第一个NPM版本
* [x] 文档
    * [x] 文档支持多语言
    * [x] 完成Github中英文版本README.
    * [x] 完成所有组件的中英文版本文档和示例.
    * [x] 优化文档样式.

## 感谢
* [Frank Fang](https://github.com/FrankFang)
* [Shehab Eltawel](https://codepen.io/shehab-eltawel)
* [Hamish Williams](https://codepen.io/HamishMW)
* [Ru Work](https://codepen.io/ru_work)
* [Element UI](https://github.com/ElemeFE/element)
* [Ant Design Vue](https://github.com/vueComponent/ant-design-vue)
* [Cyberpunk 2077](https://www.cyberpunk.net/us/zh-cn/pre-order)

## 开源协议
[MIT](LICENSE)
