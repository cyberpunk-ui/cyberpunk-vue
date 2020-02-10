import CCascader from './main';

/* istanbul ignore next */
CCascader.install = function(Vue) {
  Vue.component(CCascader.name, CCascader);
};

export default CCascader;