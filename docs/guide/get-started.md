---
title: Quick start
---

# Quick start

## Install with npm or yarn


```
npm install cyberpunk-vue --save
```

```
yarn add cyberpunk-vue
```


## Global registration

Register all components of Cyberpunk Vue globally and use them directly in any component

```js
import Vue from 'vue';
import cyberpunk from 'cyberpunk-vue';
import 'cyberpunk-vue/lib/cyberpunk-vue.css';

Vue.use(cyberpunk);
```

## Independent reference

If you only want to introduce some components, you need to write the following in main.js

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