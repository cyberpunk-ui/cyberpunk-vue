import Vue from 'vue';
import CButton from './components/button'
import CIcon from "./components/icon";

Vue.use(CButton);
Vue.use(CIcon);

new Vue({
  el: '#app',
  methods: {
    onClick: ()=> {
      alert('触发点击事件')
    }
  }
});