import CAside from "./main";

/* istanbul ignore next */
CAside.install = function(Vue) {
  Vue.component(CAside.name, CAside);
};

export default CAside;
