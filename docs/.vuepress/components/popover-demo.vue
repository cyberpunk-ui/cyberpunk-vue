<template>
  <div class="demo">
    <h2>Basic usage</h2>
    <p>Wide range of basic usages.</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <c-popover>
          <template slot="content">
            <div>popover</div>
          </template>
          <c-button>Top</c-button>
        </c-popover>
        <c-popover position="bottom">
          <template slot="content">
            <div>popover</div>
          </template>
          <c-button>Bottom</c-button>
        </c-popover>
        <c-popover position="left">
          <template slot="content">
            <div>popover</div>
          </template>
          <c-button>Left</c-button>
        </c-popover>
        <c-popover position="right">
          <template slot="content">
            <div>popover</div>
          </template>
          <c-button>Right</c-button>
        </c-popover>
      </div>
      <div class="code-content" v-highlight style="height: 0;">
        <div class="code-content-height">
          <pre><code class="html">{{ parseCode(codeStr) }}</code></pre>
        </div>
      </div>
      <div class="lock-code" @click="showCode(0)">
        <c-icon class="icon-down" :type="isShowCode(0, 'icon')"></c-icon>
        <span class="lock-code-word">{{isShowCode(0, 'text')}}</span>
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
              <div>popover</div>
            </template>
            <c-button>Top</c-button>
          </c-popover>
          <c-popover position="bottom">
            <template slot="content">
              <div>popover</div>
            </template>
            <c-button>Bottom</c-button>
          </c-popover>
          <c-popover position="left">
            <template slot="content">
              <div>popover</div>
            </template>
            <c-button>Left</c-button>
          </c-popover>
          <c-popover position="right">
            <template slot="content">
              <div>popover</div>
            </template>
            <c-button>Right</c-button>
          </c-popover>
        `,
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>