import Vue from 'vue'
import highlight from 'highlight.js'
import 'highlight.js/styles/railscasts.css'
import './styles/index.scss'
import './styles/table.scss'

Vue.directive('highlight',function (el) {
  let blocks = el.querySelectorAll('pre code');
  blocks.forEach((block)=>{
    highlight.highlightBlock(block)
  })
})

export default ({Vue}) => {}