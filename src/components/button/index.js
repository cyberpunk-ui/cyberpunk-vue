import CButton from "./button";

/* istanbul ignore next */
CButton.install = function(Vue) {
  Vue.component(CButton.name, CButton);
};

export default CButton;
