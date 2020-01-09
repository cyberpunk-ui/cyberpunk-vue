import CTabPane from './main';

/* istanbul ignore next */
CTabPane.install = function(Vue) {
  Vue.component(CTabPane.name, CTabPane);
};

export default CTabPane;