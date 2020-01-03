import Vue from 'vue';
import CButton from './components/button'
import CIcon from "./components/icon";
import CButtonGroup from "./components/button-group";
import CInput from "./components/input";

Vue.use(CButton);
Vue.use(CIcon);
Vue.use(CButtonGroup);
Vue.use(CInput);


new Vue({
  el: '#app',
  methods: {
    onClick: ()=> {
      alert('触发点击事件')
    }
  }
});