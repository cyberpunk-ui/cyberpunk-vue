import CTabsPane from "./main";

/* istanbul ignore next */
CTabsPane.install = function(Vue) {
  Vue.component(CTabsPane.name, CTabsPane);
};

export default CTabsPane;
