export default {
  data () {
    return {
      // 每一个区域的高度
      codeParent: [],
      codeHeightArr: [],
      // 每个区域的显示状态
      isShow: [],
    }
  },
  methods: {
    // 根据子元素的高度 设置代码区域父元素的高度
    showCode (index) {
      this.$set(this.isShow, index, !this.isShow[index])
      this.$nextTick(() => {
        if (this.isShow[index] === true) {
          this.codeParent[index].style.height = +this.codeHeightArr[index] + 25 + 'px'
        } else {
          this.codeParent[index].style.height = 0
        }
      })
    },
    // 根据语言、类型显示对应内容和icon
    isShowCode (index, type, lang) {
      const language = lang || 'en'
      const showCode = language === 'en' ? 'Expand' : '显示代码'
      const hideCode = language === 'en' ? 'Hide' : '隐藏代码'
      return type === 'icon'
        ? this.isShow[index] === false ? 'arrow-down' : 'arrow-up'
        :this.isShow[index] === false ? showCode : hideCode;
    },
    // 得到所有代码区域的高度
    getCodesHeight () {
      const arr = document.getElementsByClassName('code-content-height')
      this.codeParent = document.getElementsByClassName('code-content')
      const arrLength = arr.length
      for (let i = 0; i < arrLength; i++) {
        this.codeHeightArr.push(arr[i].getBoundingClientRect().height)
        this.isShow.push(false)
      }
    },
    // 自动去除代码中的字符串
    parseCode (code) {
      return code.replace(/^ {8}/gm, '').trim()
    }
  },
  mounted () {
    // 异步获取当前组件内部 code区域的高度 以便于给点击的时候使用
    this.$nextTick(() => {
      this.getCodesHeight()
    })
  },
}