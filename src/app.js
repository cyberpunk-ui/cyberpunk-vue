import Vue from 'vue';
import CButton from './components/button'
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

new Vue({
  el: '#app',
  data(){
    return {
      vModelValue: '',
      selectedTab: 'tabs1',
      selectedCollapse: '2',
    }
  },
  mounted() {
    setTimeout(()=>{
      this.vModelValue += '测试v-model';
    }, 1000)
  },
  methods: {
    onClick: ()=> {
      alert('触发点击事件')
    },
    onInput: (e)=> {
      console.log(e);
    },
    onInputChange: (e)=> {
      console.log(e);
    },
    onFocus: (e)=> {
      console.log(e);
    },
    onBlur: (e)=> {
      console.log(e);
    },
    onTabChange: (activeName)=> {
      // console.log('123',selected)
    },
    handleCollapseChange: ()=> {
    },
    onMessage(position){
      this.$message({
        message: '保存成功',
        position,
        autoClose:false,
        closeButton: {
          callback: (message) =>  {
            console.log(message)
          } 
        }
      })
    },
  }
});