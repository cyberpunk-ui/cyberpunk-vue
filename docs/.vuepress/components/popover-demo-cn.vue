<template>
  <div class="demo">
    <h2>基本用法</h2>
    <p>适用广泛的基础用法。</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <c-popover>
          <template slot="content">
            <div>popover内容</div>
          </template>
          <c-button>向上弹出</c-button>
        </c-popover>
        <c-popover position="bottom">
          <template slot="content">
            <div>popover内容</div>
          </template>
          <c-button>向下弹出</c-button>
        </c-popover>
        <c-popover position="left">
          <template slot="content">
            <div>popover内容</div>
          </template>
          <c-button>向左弹出</c-button>
        </c-popover>
        <c-popover position="right">
          <template slot="content">
            <div>popover内容</div>
          </template>
          <c-button>向右弹出</c-button>
        </c-popover>
      </div>
      <div class="code-content" v-highlight style="height: 0;">
        <div class="code-content-height">
          <pre><code class="html">{{ parseCode(codeStr) }}</code></pre>
        </div>
      </div>
      <div class="lock-code" @click="showCode(0)">
        <c-icon class="icon-down" :type="isShowCode(0, 'icon', 'cn')"></c-icon>
        <span class="lock-code-word">{{isShowCode(0, 'text', 'cn')}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import CButton from '../../../src/components/button/button'
  import CPopover from '../../../src/components/popover/main'
  import CIcon from '../../../src/components/icon/icon'
  import mixin from '../scripts/mixin'

  export default {
    name: 'Demo',
    mixins: [mixin],
    components: {
      CButton,
      CPopover,
      CIcon,
    },
    data() {
      return {

        codeStr: `
          <c-popover>
            <template slot="content">
              <div>popover内容</div>
            </template>
            <c-button>向上弹出</c-button>
          </c-popover>
          <c-popover position="bottom">
            <template slot="content">
              <div>popover内容</div>
            </template>
            <c-button>向下弹出</c-button>
          </c-popover>
          <c-popover position="left">
            <template slot="content">
              <div>popover内容</div>
            </template>
            <c-button>向左弹出</c-button>
          </c-popover>
          <c-popover position="right">
            <template slot="content">
              <div>popover内容</div>
            </template>
            <c-button>向右弹出</c-button>
          </c-popover>
        `,
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>