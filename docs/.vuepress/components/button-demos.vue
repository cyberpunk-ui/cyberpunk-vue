<template>
  <div class="demo">
    <h2>简单用法</h2>
    <p>
      <strong>预览</strong>
    </p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <C-button>默认按钮</C-button>
        <C-button icon="setting">带 icon 按钮</C-button>
        <C-button :loading="true">加载按钮</C-button>
        <C-button disabled>禁用按钮</C-button>
      </div>
      <div class="code-content" v-highlight style="height: 0;">
        <div class="code-content-height">
          <pre><code class="html">{{codeStr}}</code></pre>
        </div>
      </div>
      <div class="lock-code" @click="showCode(0)">
        <c-icon class="icon-down" :type="isShow[0] === false ? 'arrow-down' : 'arrow-up'"></c-icon>
        <span class="lock-code-word">{{isShow[0] === false ? '显示代码' : '隐藏代码'}}</span>
      </div>
    </div>

    <h2>按钮组</h2>
    <p>
      <strong>预览</strong>
    </p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <c-button-group>
          <c-button icon="left">
            上一页
          </c-button>
          <c-button>
            更多
          </c-button>
          <c-button icon="right">
            下一页
          </c-button>
        </c-button-group>
      </div>
      <div class="code-content" v-highlight style="height: 0;">
        <div class="code-content-height">
          <pre><code class="html">{{codeStr2}}</code></pre>
        </div>
      </div>
      <div class="lock-code" @click="showCode(1)">
        <c-icon class="icon-down" :type="isShow[1] === false ? 'arrow-down' : 'arrow-up'"></c-icon>
        <span class="lock-code-word">{{isShow[1] === false ? '显示代码' : '隐藏代码'}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import CButton from '../../../src/components/button/button'
  import CButtonGroup from '../../../src/components/button-group/button-group'
  import CIcon from '../../../src/components/icon/icon'
  import mixin from '../scripts/mixin'

  export default {
    name: 'ButtonDemo',
    mixins: [mixin],
    components: {
      CButton,
      CIcon,
      CButtonGroup
    },
    data() {
      return {
        codeStr: `
          <c-button>默认按钮</c-button>
          <c-button icon="settings">默认按钮</c-button>
          <c-button :loading="true">默认按钮</c-button>
          <c-button disabled>默认按钮</c-button>
        `.replace(/^ {8}/gm, '').trim(),

        codeStr2: `
          <c-button-group>
            <c-button icon="left">
              上一页
            </c-button>
            <c-button>
              更多
            </c-button>
            <c-button icon="right">
              下一页
            </c-button>
          </c-button-group>
          `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>