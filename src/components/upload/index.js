import CUpload from "./main";

/* istanbul ignore next */
CUpload.install = function(Vue) {
  Vue.component(CUpload.name, CUpload);
};

export default CUpload;
