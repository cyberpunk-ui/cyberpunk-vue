import CLayout from './main';

/* istanbul ignore next */
CLayout.install = function(Vue) {
  Vue.component(CLayout.name, CLayout);
};

export default CLayout;