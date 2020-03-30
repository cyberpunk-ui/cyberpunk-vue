import Vue from "vue";
import App from "./App.vue";

import CButton from "./components/button";
import CIcon from "./components/icon";
import CButtonGroup from "./components/button-group";
import CInput from "./components/input";
import CRow from "./components/row";
import CCol from "./components/col";
import CAside from "./components/aside";
import CLayout from "./components/layout";
import CMain from "./components/main";
import CHeader from "./components/header";
import CFooter from "./components/footer";
import CMessage from "./components/message";
import CTabs from "./components/tabs";
import CTabsPane from "./components/tabs-pane";
import CTabsHead from "./components/tabs-head";
import CTabsItem from "./components/tabs-item";
import CTabsBody from "./components/tabs-body";
import CPopover from "./components/popover";
import CCollapse from "./components/collapse";
import CCollapseItem from "./components/collapse-item";
import CCascader from "./components/cascader";
import CCarousel from "./components/carousel";
import CCarouselItem from "./components/carousel-item";
import CMenu from "./components/menu";
import CMenuItem from "./components/menu-item";
import CSubMenu from "./components/sub-menu";
import CPagination from "./components/pagination";
import CTable from "./components/table";
import CTableColumn from "./components/table-column";
import CUpload from "./components/upload";
import CSticky from "./components/sticky";
import CDatePicker from "./components/date-picker";

Vue.use(CButton);
Vue.use(CIcon);
Vue.use(CButtonGroup);
Vue.use(CInput);
Vue.use(CRow);
Vue.use(CCol);
Vue.use(CLayout);
Vue.use(CAside);
Vue.use(CHeader);
Vue.use(CMain);
Vue.use(CFooter);
Vue.use(CMessage);
Vue.use(CTabs);
Vue.use(CTabsPane);
Vue.use(CTabsHead);
Vue.use(CTabsItem);
Vue.use(CTabsBody);
Vue.use(CPopover);
Vue.use(CCollapse);
Vue.use(CCollapseItem);
Vue.use(CCascader);
Vue.use(CCarousel);
Vue.use(CCarouselItem);
Vue.use(CMenu);
Vue.use(CMenuItem);
Vue.use(CSubMenu);
Vue.use(CPagination);
Vue.use(CTable);
Vue.use(CTableColumn);
Vue.use(CUpload);
Vue.use(CSticky);
Vue.use(CDatePicker);

Vue.config.productionTip = false;

new Vue({
  render: function(h) {
    return h(App);
  }
}).$mount("#app");
