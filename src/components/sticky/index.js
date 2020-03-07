import CSticky from "./main";

/* istanbul ignore next */
CSticky.install = function(Vue) {
  Vue.component(CSticky.name, CSticky);
};

export default CSticky;
