---
home: true
heroText: Cyberpunk Vue
heroImage: /cyberpunk-logo.jpg
tagline: A dark mode first UI library
actionText: Get Started →
actionLink: /guide/
features:
- title: Dark style UI library
  details: Complete dark style UI control color matching to help you quickly build.
- title: Support Mobile & PC
  details: Enjoy the dev experience of Vue + webpack, And use it on mobile and PC.
- title: Full test coverage
  details: Use Chai + mocha as a unit test tool with 90% + test coverage.
footer: Copyright © 2019-present EvanBell | MIT Licensed
---
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
