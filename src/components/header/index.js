import CHeader from './main';

/* istanbul ignore next */
CHeader.install = function(Vue) {
  Vue.component(CHeader.name, CHeader);
};

export default CHeader;