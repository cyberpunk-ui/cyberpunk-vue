<template>
  <div class="demo">
    <h2>基础用法</h2>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <c-input :value="inputValue1" placeholder="请输入内容"></c-input>
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
    <h2>禁用/只读状态</h2>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <c-input placeholder="禁用内容" disabled></c-input>
        <c-input
          placeholder="请输入内容"
          disabled
          value="禁用状态内容"
        ></c-input>
        <c-input placeholder="只读内容" readonly></c-input>
        <c-input placeholder="请输入内容" readonly value="内容只读"></c-input>
      </div>
      <div class="code-content" v-highlight style="height: 0;">
        <div class="code-content-height">
          <pre><code class="html">{{ parseCode(codeStr2) }}</code></pre>
        </div>
      </div>
      <div class="lock-code" @click="showCode(1)">
        <c-icon class="icon-down" :type="isShowCode(1, 'icon', 'cn')"></c-icon>
        <span class="lock-code-word">{{isShowCode(1, 'text', 'cn')}}</span>
      </div>
    </div>
    <h2>不同尺寸</h2>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <c-input placeholder="Large" size="large"></c-input>
        <c-input placeholder="Default"></c-input>
        <c-input placeholder="Small" size="small"></c-input>
        <c-input placeholder="Mini" size="mini"></c-input>
      </div>
      <div class="code-content" v-highlight style="height: 0;">
        <div class="code-content-height">
          <pre><code class="html">{{ parseCode(codeStr3) }}</code></pre>
        </div>
      </div>
      <div class="lock-code" @click="showCode(2)">
        <c-icon class="icon-down" :type="isShowCode(2, 'icon', 'cn')"></c-icon>
        <span class="lock-code-word">{{isShowCode(2, 'text', 'cn')}}</span>
      </div>
    </div>
    <h2>支持不同事件</h2>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <c-input placeholder="Input" @input="onInput"></c-input>
        <c-input placeholder="Change" @change="onInputChange"></c-input>
        <c-input placeholder="Focus" @focus="onFocus"></c-input>
        <c-input placeholder="Blur" @focus="onBlur"></c-input>
      </div>
      <div class="code-content" v-highlight style="height: 0;">
        <div class="code-content-height">
          <pre><code class="html">{{ parseCode(codeStr4) }}</code></pre>
        </div>
      </div>
      <div class="lock-code" @click="showCode(3)">
        <c-icon class="icon-down" :type="isShowCode(3, 'icon', 'cn')"></c-icon>
        <span class="lock-code-word">{{isShowCode(3, 'text', 'cn')}}</span>
      </div>
    </div>
    <h2>支持v-model</h2>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <c-input placeholder="v-model属性" v-model="vModelValue"></c-input>
        <span style="color: white">{{ vModelValue }}</span>
      </div>
      <div class="code-content" v-highlight style="height: 0;">
        <div class="code-content-height">
          <pre><code class="html">{{ parseCode(codeStr5) }}</code></pre>
        </div>
      </div>
      <div class="lock-code" @click="showCode(4)">
        <c-icon class="icon-down" :type="isShowCode(4, 'icon', 'cn')"></c-icon>
        <span class="lock-code-word">{{isShowCode(4, 'text', 'cn')}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import CInput from '../../../src/components/input/input'
  import CIcon from '../../../src/components/icon/icon'
  import mixin from '../scripts/mixin'

  export default {
    name: 'Demo',
    mixins: [mixin],
    components: {
      CInput,
      CIcon,
    },
    data() {
      return {
        inputValue1:'',
        inputValue2:'',
        vModelValue:'v-model',
        codeStr: `
          <c-input :value="inputValue1" placeholder="请输入内容"></c-input>
        `,
        codeStr2: `
          <c-input placeholder="禁用内容" disabled></c-input>
          <c-input
            placeholder="请输入内容"
            disabled
            value="禁用状态内容"
          ></c-input>
          <c-input placeholder="只读内容" readonly></c-input>
          <c-input placeholder="请输入内容" readonly value="内容只读"></c-input>
        `,
        codeStr3: `
          <c-input placeholder="Large" size="large"></c-input>
          <c-input placeholder="Default"></c-input>
          <c-input placeholder="Small" size="small"></c-input>
          <c-input placeholder="Mini" size="mini"></c-input>
        `,
        codeStr4: `
          <c-input placeholder="Input" @input="onInput"></c-input>
          <c-input placeholder="Change" @change="onInputChange"></c-input>
          <c-input placeholder="Focus" @focus="onFocus"></c-input>
          <c-input placeholder="Blur" @focus="onBlur"></c-input>
        `,
        codeStr5: `
          <c-input placeholder="v-model属性" v-model="vModelValue"></c-input>
          <span style="color: white">{{ vModelValue }}</span>
        `,

      }
    },
    methods: {
      onInput: e => {
        console.log(e);
      },
      onInputChange: e => {
        console.log(e);
      },
      onFocus: e => {
        console.log(e);
      },
      onBlur: e => {
        console.log(e);
      },
    }
  }
</script>

<style lang="scss" scoped>

</style>