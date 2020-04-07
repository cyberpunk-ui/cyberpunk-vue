<template>
  <div class="demo">
    <h2>基础用法</h2>
    <p>从顶部出现，3 秒后自动消失。</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <c-button icon="rising1" @click="onMessage('top')">Top</c-button>
        <c-button icon="reduce" @click="onMessage('center')">Center</c-button>
        <c-button icon="falling" @click="onMessage('bottom')">Bottom</c-button>
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
    <h2>支持HTML</h2>
    <p>message 属性支持传入 HTML 片段。</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <c-button icon="rising1" @click="onMessage2('top')">HTML Dom</c-button>
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
  </div>
</template>

<script>
  import Vue from 'vue'
  import CButton from '../../../src/components/button/button'
  import CMessage from '../../../src/components/message'
  import CIcon from '../../../src/components/icon/icon'
  import mixin from '../scripts/mixin'

  Vue.use(CMessage);

  export default {
    name: 'Demo',
    mixins: [mixin],
    components: {
      CButton,
      CIcon,
    },
    data() {
      return {
        codeStr: `
          <c-button icon="rising1" @click="onMessage('top')">顶部提示</c-button>
          <c-button icon="reduce" @click="onMessage('center')">居中提示</c-button>
          <c-button icon="falling" @click="onMessage('bottom')">底部提示</c-button>

          onMessage(position) {
            this.$message({
              message: "保存成功",
              position,
              autoClose: 3,
              closeButton: {
                callback: message => {
                  console.log(message);
                }
              }
            });
          }
        `,
        codeStr2: `
          <c-button icon="rising1" @click="onMessage2('top')">HTML Dom</c-button>

          onMessage2(position) {
            this.$message({
              message: "<i>HTML DOM</i>",
              position,
              autoClose: 3,
              enableHtml: true,
              closeButton: {
                callback: message => {
                  console.log(message);
                }
              }
            });
          }
        `,
      }
    },
    methods: {
      onMessage(position) {
        this.$message({
          message: "保存成功",
          position,
          autoClose: 3,
          closeButton: {
            callback: message => {
              console.log(message);
            }
          }
        });
      },
      onMessage2(position) {
        this.$message({
          message: "<i>HTML DOM</i>",
          position,
          autoClose: 3,
          enableHtml: true,
          closeButton: {
            callback: message => {
              console.log(message);
            }
          }
        });
      },
    }
  }
</script>

<style lang="scss" scoped>

</style>