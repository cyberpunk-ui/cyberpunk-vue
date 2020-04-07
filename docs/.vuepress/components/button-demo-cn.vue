<template>
  <div class="demo">
    <h2>基础用法</h2>
    <p>基础的按钮用法, 如是否带icon图标，是否加载中，是否禁用。</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <c-button>默认按钮</c-button>
        <c-button icon="editor">带 icon 按钮</c-button>
        <c-button :loading="true">加载按钮</c-button>
        <c-button disabled>禁用按钮</c-button>
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

    <h2>不同尺寸</h2>
    <p>Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <c-button size="large">大型按钮</c-button>
        <c-button>默认按钮</c-button>
        <c-button size="small">小型按钮</c-button>
        <c-button size="mini">迷你按钮</c-button>
      </div>
      <div class="code-content" v-highlight style="height: 0;">
        <div class="code-content-height">
          <pre><code class="html">{{parseCode(codeStr2)}}</code></pre>
        </div>
      </div>
      <div class="lock-code" @click="showCode(1)">
        <c-icon class="icon-down" :type="isShowCode(1, 'icon', 'cn')"></c-icon>
        <span class="lock-code-word">{{isShowCode(1, 'text', 'cn')}}</span>
      </div>
    </div>

    <h2>按钮组</h2>
    <p>以按钮组的方式出现，常用于多项类似操作。</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <c-button-group>
          <c-button icon="arrow-lift">
            上一页
          </c-button>
          <c-button>
            更多
          </c-button>
          <c-button icon="arrow-right" icon-position="right">
            下一页
          </c-button>
        </c-button-group>
      </div>
      <div class="code-content" v-highlight style="height: 0;">
        <div class="code-content-height">
          <pre><code class="html">{{parseCode(codeStr3)}}</code></pre>
        </div>
      </div>
      <div class="lock-code" @click="showCode(2)">
        <c-icon class="icon-down" :type="isShowCode(2, 'icon', 'cn')"></c-icon>
        <span class="lock-code-word">{{isShowCode(2, 'text', 'cn')}}</span>
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
    name: 'Demo',
    mixins: [mixin],
    components: {
      CButton,
      CIcon,
      CButtonGroup
    },
    data() {
      return {
        codeStr: `
          <c-button>超大按钮</c-button>
          <c-button icon="editor">默认按钮</c-button>
          <c-button :loading="true">默认按钮</c-button>
          <c-button disabled>默认按钮</c-button>
        `,
        codeStr2: `
          <c-button size="large">超小按钮</c-button>
          <c-button>默认按钮</c-button>
          <c-button size="small">中等按钮</c-button>
          <c-button size="mini">小型按钮</c-button>
          `,
        codeStr3: `
          <c-button-group>
            <c-button icon="arrow-lift">
              上一页
            </c-button>
            <c-button>
              更多
            </c-button>
            <c-button icon="arrow-right" icon-position="right">
              下一页
            </c-button>
          </c-button-group>
          `,

      }
    }
  }
</script>

<style lang="scss" scoped>

</style>