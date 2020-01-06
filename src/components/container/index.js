import CContainer from './main';

/* istanbul ignore next */
CContainer.install = function(Vue) {
  Vue.component(CContainer.name, CContainer);
};

export default CContainer;