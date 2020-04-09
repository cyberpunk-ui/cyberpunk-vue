---
title: 快速上手
---

# 快速上手

## 使用 npm 或 yarn 安装


```
npm install cyberpunk-vue --save
```

```
yarn add cyberpunk-vue
```


## 全局注册

全局注册Cyberpunk Vue所有组件，然后直接在任一组件使用

```js
import Vue from 'vue';
import cyberpunk from 'cyberpunk-vue';
import 'cyberpunk-vue/lib/cyberpunk-vue.css';

Vue.use(cyberpunk);
```

## 独立引用

如果你只希望引入部分组件，那么需要在 main.js 中写入以下内容

```js
// or
import {
  Button,
  Input
  // ...
} from 'cyberpunk-vue';

Vue.use(Button);
Vue.use(Input);
```