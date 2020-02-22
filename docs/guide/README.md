---
title: Introduction
---
# Introduction
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