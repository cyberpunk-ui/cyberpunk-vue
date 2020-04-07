<template>
  <div class="demo">
    <h2>Basic usage</h2>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <c-input :value="inputValue1" placeholder="Please enter content"></c-input>
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
    <h2>Disabled / Read Only</h2>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <c-input placeholder="Disabled Content" disabled></c-input>
        <c-input
          placeholder="Please enter content"
          disabled
          value="Disabled Content"
        ></c-input>
        <c-input placeholder="Read Only" readonly></c-input>
        <c-input placeholder="Please enter content" readonly value="Read Only"></c-input>
      </div>
      <div class="code-content" v-highlight style="height: 0;">
        <div class="code-content-height">
          <pre><code class="html">{{ parseCode(codeStr2) }}</code></pre>
        </div>
      </div>
      <div class="lock-code" @click="showCode(1)">
        <c-icon class="icon-down" :type="isShowCode(1, 'icon')"></c-icon>
        <span class="lock-code-word">{{isShowCode(1, 'text')}}</span>
      </div>
    </div>
    <h2>Sizes</h2>
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
        <c-icon class="icon-down" :type="isShowCode(2, 'icon')"></c-icon>
        <span class="lock-code-word">{{isShowCode(2, 'text')}}</span>
      </div>
    </div>
    <h2>Event</h2>
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
        <c-icon class="icon-down" :type="isShowCode(3, 'icon')"></c-icon>
        <span class="lock-code-word">{{isShowCode(3, 'text')}}</span>
      </div>
    </div>
    <h2>v-model</h2>
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
        <c-icon class="icon-down" :type="isShowCode(4, 'icon')"></c-icon>
        <span class="lock-code-word">{{isShowCode(4, 'text')}}</span>
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
          <c-input :value="inputValue1" placeholder="Please enter content"></c-input>
        `,
        codeStr2: `
          <c-input placeholder="Disabled" disabled></c-input>
          <c-input
            placeholder="Please enter content"
            disabled
            value="Disabled"
          ></c-input>
          <c-input placeholder="Read Only" readonly></c-input>
          <c-input placeholder="Please enter content" readonly value="Read Only"></c-input>
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
          <c-input placeholder="v-model" v-model="vModelValue"></c-input>
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