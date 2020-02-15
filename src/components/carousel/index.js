import CCarousel from "./main";

/* istanbul ignore next */
CCarousel.install = function(Vue) {
  Vue.component(CCarousel.name, CCarousel);
};

export default CCarousel;
