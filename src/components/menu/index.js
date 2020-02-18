import CMenu from "./main";

/* istanbul ignore next */
CMenu.install = function(Vue) {
  Vue.component(CMenu.name, CMenu);
};

export default CMenu;
