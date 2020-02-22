---
home: true
heroText: Cyberpunk Vue
heroImage: /cyberpunk-logo.jpg
tagline: Vue驱动的黑暗风格UI库
actionText: 快速上手 →
actionLink: /zh/guide/
features:
- title: 黑暗风格UI库
  details: 完整的黑暗风格UI控件配色，帮助你快速搭建页面。
- title: 支持移动端&PC端
  details: 享受Vue + Webpack的开发经验，并在手机和PC上使用。
- title: 完整测试覆盖率
  details: 使用Chai + mocha作为单元测试工具,具备90%+测试覆盖率。
footer: Copyright © 2019-2020 EvanBell | MIT Licensed
---
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