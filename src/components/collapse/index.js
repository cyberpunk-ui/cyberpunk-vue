import CCollapse from './main';

/* istanbul ignore next */
CCollapse.install = function(Vue) {
  Vue.component(CCollapse.name, CCollapse);
};

export default CCollapse;