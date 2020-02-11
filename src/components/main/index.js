import CMain from "./main";

/* istanbul ignore next */
CMain.install = function(Vue) {
  Vue.component(CMain.name, CMain);
};

export default CMain;
