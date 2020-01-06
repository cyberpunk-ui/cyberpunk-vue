import Vue from 'vue';
import CButton from './components/button'
import CIcon from "./components/icon";
import CButtonGroup from "./components/button-group";
import CInput from "./components/input";
import CRow from "./components/row";
import CCol from "./components/col";
import CAside from "./components/aside";
import CContainer from "./components/container";
import CMain from "./components/main";
import CHeader from "./components/header";
import CFooter from "./components/footer";

Vue.use(CButton);
Vue.use(CIcon);
Vue.use(CButtonGroup);
Vue.use(CInput);
Vue.use(CRow);
Vue.use(CCol);
Vue.use(CContainer);
Vue.use(CAside);
Vue.use(CHeader);
Vue.use(CMain);
Vue.use(CFooter);


new Vue({
  el: '#app',
  data(){
    return {
      vModelValue: '',
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
  }
});