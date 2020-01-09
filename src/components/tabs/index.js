import CTabs from './main';

/* istanbul ignore next */
CTabs.install = function(Vue) {
  Vue.component(CTabs.name, CTabs);
};

export default CTabs;