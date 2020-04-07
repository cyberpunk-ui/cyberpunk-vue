<template>
  <div class="demo">
    <h2>Basic usage</h2>
    <p>Provides a set of commonly used icons.</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <c-icon type="loading"></c-icon>
        <c-icon type="upload"></c-icon>
        <c-icon type="warning"></c-icon>
        <c-icon type="discounts"></c-icon>
        <c-button icon="download">Download</c-button>
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

    <h2>Icon collection ({{iconMap.size}})</h2>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <div class="icon-card-wrapper">
          <div class="icon-card" v-for="icon in iconMap" :key="icon">
            <div class="icon">
              <c-icon :type="icon"></c-icon>
            </div>
            <div class="text">
              {{ icon }}
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import CButton from '../../../src/components/button/button'
  import CIcon from '../../../src/components/icon/icon'
  import mixin from '../scripts/mixin'
  import iconMap from '../scripts/iconMap'

  export default {
    name: 'Demo',
    mixins: [mixin],
    components: {
      CButton,
      CIcon,
    },
    data() {
      return {
        iconMap,
        codeStr: `
          <c-icon type="loading"></c-icon>
          <c-icon type="upload"></c-icon>
          <c-icon type="warning"></c-icon>
          <c-icon type="success"></c-icon>
          <c-button icon="download">Download</c-button>
        `,
      }
    }
  }
</script>

<style lang="scss" scoped>
  .icon-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid #242424;
    width: 138px;
    height: 138px;
    box-sizing: border-box;
    text-align: center;
    transition: background-color .3s;
    &-wrapper {
      display: flex;
      flex-wrap: wrap;
    }
    & .icon {
      font-size: 32px;
    }
    & .text {
      font-size: 14px;
      line-height: 32px;
    }
    &:hover {
      background-color: #242424;
    }
  }
</style>