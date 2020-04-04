<template>
  <div class="demo">
    <h2>Basic usage</h2>
    <p>Basic button usage, such as whether to bring icon icon, whether to load, whether to disable.</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <c-button>Default</c-button>
        <c-button icon="editor">Edit</c-button>
        <c-button :loading="true">Loading</c-button>
        <c-button disabled>Disabled</c-button>
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

    <h2>Sizes</h2>
    <p>Besides default size, Button component provides three additional sizes for you to choose among different scenarios.</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <c-button size="large">Large</c-button>
        <c-button>Default</c-button>
        <c-button size="small">Small</c-button>
        <c-button size="mini">Mini</c-button>
      </div>
      <div class="code-content" v-highlight style="height: 0;">
        <div class="code-content-height">
          <pre><code class="html">{{parseCode(codeStr2)}}</code></pre>
        </div>
      </div>
      <div class="lock-code" @click="showCode(1)">
        <c-icon class="icon-down" :type="isShowCode(1, 'icon')"></c-icon>
        <span class="lock-code-word">{{isShowCode(1, 'text')}}</span>
      </div>
    </div>

    <h2>Button Group</h2>
    <p>Displayed as a button group, can be used to group a series of similar operations.</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <c-button-group>
          <c-button icon="arrow-lift">
            Prev
          </c-button>
          <c-button>
            More
          </c-button>
          <c-button icon="arrow-right" icon-position="right">
            Next
          </c-button>
        </c-button-group>
      </div>
      <div class="code-content" v-highlight style="height: 0;">
        <div class="code-content-height">
          <pre><code class="html">{{parseCode(codeStr3)}}</code></pre>
        </div>
      </div>
      <div class="lock-code" @click="showCode(2)">
        <c-icon class="icon-down" :type="isShowCode(2, 'icon')"></c-icon>
        <span class="lock-code-word">{{isShowCode(2, 'text')}}</span>
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
          <c-button>Default</c-button>
          <c-button icon="editor">Edit</c-button>
          <c-button :loading="true">Loading</c-button>
          <c-button disabled>Disabled</c-button>
        `,
        codeStr2: `
          <c-button size="large">Large</c-button>
          <c-button>Default</c-button>
          <c-button size="small">Small</c-button>
          <c-button size="mini">Mini</c-button>
          `,
        codeStr3: `
          <c-button-group>
            <c-button icon="arrow-lift">
              Prev
            </c-button>
            <c-button>
              More
            </c-button>
            <c-button icon="arrow-right" icon-position="right">
              Next
            </c-button>
          </c-button-group>
          `,

      }
    }
  }
</script>

<style lang="scss" scoped>

</style>