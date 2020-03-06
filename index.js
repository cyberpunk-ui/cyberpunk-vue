import CButton from "./src/components/button/index.js";
import CIcon from "./src/components/icon/index.js";
import CButtonGroup from "./src/components/button-group/index.js";
import CInput from "./src/components/input/index.js";
import CRow from "./src/components/row/index.js";
import CCol from "./src/components/col/index.js";
import CAside from "./src/components/aside/index.js";
import CLayout from "./src/components/layout/index.js";
import CMain from "./src/components/main/index.js";
import CHeader from "./src/components/header/index.js";
import CFooter from "./src/components/footer/index.js";
import CMessage from "./src/components/message/index.js";
import CTabs from "./src/components/tabs/index.js";
import CTabsPane from "./src/components/tabs-pane/index.js";
import CTabsHead from "./src/components/tabs-head/index.js";
import CTabsItem from "./src/components/tabs-item/index.js";
import CTabsBody from "./src/components/tabs-body/index.js";
import CPopover from "./src/components/popover/index.js";
import CCollapse from "./src/components/collapse/index.js";
import CCollapseItem from "./src/components/collapse-item/index.js";
import CCascader from "./src/components/cascader/index.js";
import CCarousel from "./src/components/carousel/index.js";
import CCarouselItem from "./src/components/carousel-item/index.js";
import CMenu from "./src/components/menu/index.js";
import CMenuItem from "./src/components/menu-item/index.js";
import CSubMenu from "./src/components/sub-menu/index.js";
import CPagination from "./src/components/pagination/index.js";
import CTable from "./src/components/table/index.js";
import CUpload from "./src/components/upload/index.js";

const components = [
  CButton,
  CIcon,
  CButtonGroup,
  CInput,
  CRow,
  CCol,
  CAside,
  CLayout,
  CMain,
  CHeader,
  CFooter,
  CMessage,
  CTabs,
  CTabsPane,
  CTabsHead,
  CTabsItem,
  CTabsBody,
  CPopover,
  CCollapse,
  CCollapseItem,
  CCascader,
  CCarousel,
  CCarouselItem,
  CMenu,
  CMenuItem,
  CSubMenu,
  CPagination,
  CTable,
  CUpload,
];

const install = function(Vue) {

  components.forEach(component => {
    Vue.component(component.name, component);
  });

  Vue.prototype.$message = CMessage;
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  CButton,
  CIcon,
  CButtonGroup,
  CInput,
  CRow,
  CCol,
  CAside,
  CLayout,
  CMain,
  CHeader,
  CFooter,
  CMessage,
  CTabs,
  CTabsPane,
  CTabsHead,
  CTabsItem,
  CTabsBody,
  CPopover,
  CCollapse,
  CCollapseItem,
  CCascader,
  CCarousel,
  CCarouselItem,
  CMenu,
  CMenuItem,
  CSubMenu,
  CPagination,
  CTable,
  CUpload,
};