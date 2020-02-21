import CPagination from "./main";

/* istanbul ignore next */
CPagination.install = function(Vue) {
  Vue.component(CPagination.name, CPagination);
};

export default CPagination;
