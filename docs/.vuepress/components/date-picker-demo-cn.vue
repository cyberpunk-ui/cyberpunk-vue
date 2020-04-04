<template>
  <div class="demo">
    <h2>基础用法</h2>
    <p>用于选择或输入日期。</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <c-date-picker :value.sync="datePickerValue"></c-date-picker>
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
  import CDatePicker from '../../../src/components/date-picker/main'
  import CIcon from '../../../src/components/icon/icon'
  import mixin from '../scripts/mixin'

  export default {
    name: 'ButtonDemo',
    mixins: [mixin],
    components: {
      CDatePicker,
      CIcon,
    },
    data() {
      return {
        datePickerValue: new Date(),
        codeStr: `
          <c-date-picker :value.sync="datePickerValue"></c-date-picker>
        `,
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>