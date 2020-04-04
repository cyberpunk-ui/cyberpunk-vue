<template>
  <div class="demo">
    <h2>基础用法</h2>
    <p>使用单一分栏创建基础的栅格布局。</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <c-row class="grid">
          <c-col span="24"><div class="grid-content bg-color"></div></c-col>
        </c-row>
        <c-row class="grid">
          <c-col span="12"><div class="grid-content bg-color-light"></div></c-col>
          <c-col span="12"><div class="grid-content bg-color"></div></c-col>
        </c-row>
        <c-row class="grid">
          <c-col span="8"><div class="grid-content bg-color-light"></div></c-col>
          <c-col span="8"><div class="grid-content bg-color"></div></c-col>
          <c-col span="8"><div class="grid-content bg-color-light"></div></c-col>
        </c-row>
        <c-row class="grid">
          <c-col span="6"><div class="grid-content bg-color-light"></div></c-col>
          <c-col span="6"><div class="grid-content bg-color"></div></c-col>
          <c-col span="6"><div class="grid-content bg-color-light"></div></c-col>
          <c-col span="6"><div class="grid-content bg-color"></div></c-col>
        </c-row>
        <c-row class="grid">
          <c-col span="4"><div class="grid-content bg-color-light"></div></c-col>
          <c-col span="4"><div class="grid-content bg-color"></div></c-col>
          <c-col span="4"><div class="grid-content bg-color-light"></div></c-col>
          <c-col span="4"><div class="grid-content bg-color"></div></c-col>
          <c-col span="4"><div class="grid-content bg-color-light"></div></c-col>
          <c-col span="4"><div class="grid-content bg-color"></div></c-col>
        </c-row>
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
    <h2>分栏间隔</h2>
    <p>分栏之间存在间隔。</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <c-row class="grid" gutter="10">
          <c-col span="24"><div class="grid-content bg-color"></div></c-col>
        </c-row>
        <c-row class="grid" gutter="10">
          <c-col span="12"><div class="grid-content bg-color-light"></div></c-col>
          <c-col span="12"><div class="grid-content bg-color"></div></c-col>
        </c-row>
        <c-row class="grid" gutter="10">
          <c-col span="8"><div class="grid-content bg-color-light"></div></c-col>
          <c-col span="8"><div class="grid-content bg-color"></div></c-col>
          <c-col span="8"><div class="grid-content bg-color-light"></div></c-col>
        </c-row>
        <c-row class="grid" gutter="10">
          <c-col span="6"><div class="grid-content bg-color-light"></div></c-col>
          <c-col span="6"><div class="grid-content bg-color"></div></c-col>
          <c-col span="6"><div class="grid-content bg-color-light"></div></c-col>
          <c-col span="6"><div class="grid-content bg-color"></div></c-col>
        </c-row>
        <c-row class="grid" gutter="10">
          <c-col span="4"><div class="grid-content bg-color-light"></div></c-col>
          <c-col span="4"><div class="grid-content bg-color"></div></c-col>
          <c-col span="4"><div class="grid-content bg-color-light"></div></c-col>
          <c-col span="4"><div class="grid-content bg-color"></div></c-col>
          <c-col span="4"><div class="grid-content bg-color-light"></div></c-col>
          <c-col span="4"><div class="grid-content bg-color"></div></c-col>
        </c-row>
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
    <h2>分栏偏移</h2>
    <p>支持偏移指定的栏数。</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <c-row  gutter="10">
          <c-col class="grid" span="8"><div class="grid-content bg-color-light"></div></c-col>
          <c-col class="grid" span="5" offset="1"><div class="grid-content bg-color"></div></c-col>
          <c-col class="grid" span="8" offset="1"><div class="grid-content bg-color-light"></div></c-col>
        </c-row>
        <c-row gutter="10">
          <c-col class="grid" span="6"><div class="grid-content bg-color"></div></c-col>
          <c-col class="grid" span="8"><div class="grid-content bg-color-light"></div></c-col>
          <c-col class="grid" span="8" offset="2"><div class="grid-content bg-color"></div></c-col>
        </c-row>
        <c-row gutter="10">
          <c-col class="grid" span="6" offset="3"><div class="grid-content bg-color"></div></c-col>
          <c-col class="grid" span="6" offset="3"><div class="grid-content bg-color-light"></div></c-col>
          <c-col class="grid" span="6"><div class="grid-content bg-color"></div></c-col>
        </c-row>
        <c-row gutter="10">
          <c-col class="grid" span="5"><div class="grid-content bg-color"></div></c-col>
          <c-col class="grid" span="5" offset="2"><div class="grid-content bg-color-light"></div></c-col>
          <c-col class="grid" span="5" offset="2"><div class="grid-content bg-color"></div></c-col>
          <c-col class="grid" span="5"><div class="grid-content bg-color"></div></c-col>
        </c-row>
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
    <h2>对齐方式</h2>
    <p>通过 align 来对分栏进行灵活的对齐。</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <c-row class="grid" gutter="20" align="center">
          <c-col span="12"><div class="grid-content bg-color-light"></div></c-col>
          <c-col span="4"><div class="grid-content bg-color"></div></c-col>
        </c-row>
        <c-row class="grid" gutter="20" align="left">
          <c-col span="12"><div class="grid-content bg-color-light"></div></c-col>
          <c-col span="4"><div class="grid-content bg-color"></div></c-col>
        </c-row>
        <c-row class="grid" gutter="20" align="right">
          <c-col span="12"><div class="grid-content bg-color-light"></div></c-col>
          <c-col span="4"><div class="grid-content bg-color"></div></c-col>
        </c-row>
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
    <h2>响应式布局</h2>
    <p>参照了 Bootstrap 的 响应式设计，预设了五个响应尺寸：xs、sm、md、lg、xl 和 xxl。</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <c-row gutter="20" class="grid">
          <c-col
            :xs="{ span: 24 }"
            sm="12"
            :md="4"
            :lg="{ span: 2, offset: '1' }"
            :xl="6"
            :xxl="8"
          ><div class="grid-content bg-color-light"></div></c-col>
          <c-col
            :xs="{ span: 24 }"
            sm="12"
            :md="8"
            :lg="{ span: 8, offset: '1' }"
            :xl="6"
            :xxl="4"
          ><div class="grid-content bg-color"></div></c-col>
          <c-col
            :xs="{ span: 24 }"
            sm="12"
            :md="8"
            :lg="{ span: 8, offset: '1' }"
            :xl="6"
            :xxl="4"
          ><div class="grid-content bg-color-light"></div></c-col>
          <c-col
            :xs="{ span: 24 }"
            sm="12"
            :md="4"
            :lg="{ span: 2, offset: '1' }"
            :xl="6"
            :xxl="8"
          ><div class="grid-content bg-color"></div></c-col>
        </c-row>
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
  import CRow from '../../../src/components/row/row'
  import CCol from '../../../src/components/col/col'
  import CIcon from '../../../src/components/icon/icon'
  import mixin from '../scripts/mixin'

  export default {
    name: 'ButtonDemo',
    mixins: [mixin],
    components: {
      CRow,
      CCol,
      CIcon,
    },
    data() {
      return {
        codeStr: `
          <c-row class="grid">
            <c-col span="24"><div class="grid-content bg-color"></div></c-col>
          </c-row>
          <c-row class="grid">
            <c-col span="12"><div class="grid-content bg-color-light"></div></c-col>
            <c-col span="12"><div class="grid-content bg-color"></div></c-col>
          </c-row>
          <c-row class="grid">
            <c-col span="8"><div class="grid-content bg-color-light"></div></c-col>
            <c-col span="8"><div class="grid-content bg-color"></div></c-col>
            <c-col span="8"><div class="grid-content bg-color-light"></div></c-col>
          </c-row>
          <c-row class="grid">
            <c-col span="6"><div class="grid-content bg-color-light"></div></c-col>
            <c-col span="6"><div class="grid-content bg-color"></div></c-col>
            <c-col span="6"><div class="grid-content bg-color-light"></div></c-col>
            <c-col span="6"><div class="grid-content bg-color"></div></c-col>
          </c-row>
          <c-row class="grid">
            <c-col span="4"><div class="grid-content bg-color-light"></div></c-col>
            <c-col span="4"><div class="grid-content bg-color"></div></c-col>
            <c-col span="4"><div class="grid-content bg-color-light"></div></c-col>
            <c-col span="4"><div class="grid-content bg-color"></div></c-col>
            <c-col span="4"><div class="grid-content bg-color-light"></div></c-col>
            <c-col span="4"><div class="grid-content bg-color"></div></c-col>
          </c-row>

          <style>
            .grid {
              margin-bottom: 12px;
            }

            .grid .grid-content {
              width: 100%;
              text-align: center;
              height: 50px;
              color: white;
            }

            .grid .grid-content.bg-color {
              background-color: #99a9bf;
            }

            .grid .grid-content.bg-color-light {
              background-color: #d3dce6;
            }
          </style>
        `,
        codeStr2: `
          <c-row class="grid" gutter="10">
            <c-col span="24"><div class="grid-content bg-color"></div></c-col>
          </c-row>
          <c-row class="grid" gutter="10">
            <c-col span="12"><div class="grid-content bg-color-light"></div></c-col>
            <c-col span="12"><div class="grid-content bg-color"></div></c-col>
          </c-row>
          <c-row class="grid" gutter="10">
            <c-col span="8"><div class="grid-content bg-color-light"></div></c-col>
            <c-col span="8"><div class="grid-content bg-color"></div></c-col>
            <c-col span="8"><div class="grid-content bg-color-light"></div></c-col>
          </c-row>
          <c-row class="grid" gutter="10">
            <c-col span="6"><div class="grid-content bg-color-light"></div></c-col>
            <c-col span="6"><div class="grid-content bg-color"></div></c-col>
            <c-col span="6"><div class="grid-content bg-color-light"></div></c-col>
            <c-col span="6"><div class="grid-content bg-color"></div></c-col>
          </c-row>
          <c-row class="grid" gutter="10">
            <c-col span="4"><div class="grid-content bg-color-light"></div></c-col>
            <c-col span="4"><div class="grid-content bg-color"></div></c-col>
            <c-col span="4"><div class="grid-content bg-color-light"></div></c-col>
            <c-col span="4"><div class="grid-content bg-color"></div></c-col>
            <c-col span="4"><div class="grid-content bg-color-light"></div></c-col>
            <c-col span="4"><div class="grid-content bg-color"></div></c-col>
          </c-row>

          <style>
            .grid {
              margin-bottom: 12px;
            }

            .grid .grid-content {
              width: 100%;
              text-align: center;
              height: 50px;
              color: white;
            }

            .grid .grid-content.bg-color {
              background-color: #99a9bf;
            }

            .grid .grid-content.bg-color-light {
              background-color: #d3dce6;
            }
          </style>
          `,
        codeStr3: `
          <c-row gutter="10">
            <c-col class="grid" span="8"><div class="grid-content bg-color-light"></div></c-col>
            <c-col class="grid" span="5" offset="1"><div class="grid-content bg-color"></div></c-col>
            <c-col class="grid" span="8" offset="1"><div class="grid-content bg-color-light"></div></c-col>
          </c-row>
          <c-row gutter="10">
            <c-col class="grid" span="6"><div class="grid-content bg-color"></div></c-col>
            <c-col class="grid" span="8"><div class="grid-content bg-color-light"></div></c-col>
            <c-col class="grid" span="8" offset="2"><div class="grid-content bg-color"></div></c-col>
          </c-row>
          <c-row gutter="10">
            <c-col class="grid" span="6" offset="3"><div class="grid-content bg-color"></div></c-col>
            <c-col class="grid" span="6" offset="3"><div class="grid-content bg-color-light"></div></c-col>
            <c-col class="grid" span="6"><div class="grid-content bg-color"></div></c-col>
          </c-row>
          <c-row gutter="10">
            <c-col class="grid" span="5"><div class="grid-content bg-color"></div></c-col>
            <c-col class="grid" span="5" offset="2"><div class="grid-content bg-color-light"></div></c-col>
            <c-col class="grid" span="5" offset="2"><div class="grid-content bg-color"></div></c-col>
            <c-col class="grid" span="5"><div class="grid-content bg-color"></div></c-col>
          </c-row>

          <style>
            .grid {
              margin-bottom: 12px;
            }

            .grid .grid-content {
              width: 100%;
              text-align: center;
              height: 50px;
              color: white;
            }

            .grid .grid-content.bg-color {
              background-color: #99a9bf;
            }

            .grid .grid-content.bg-color-light {
              background-color: #d3dce6;
            }
          </style>
          `,
        codeStr4: `
          <c-row class="grid" gutter="20" align="center">
            <c-col span="12"><div class="grid-content bg-color-light"></div></c-col>
            <c-col span="4"><div class="grid-content bg-color"></div></c-col>
          </c-row>
          <c-row class="grid" gutter="20" align="left">
            <c-col span="12"><div class="grid-content bg-color-light"></div></c-col>
            <c-col span="4"><div class="grid-content bg-color"></div></c-col>
          </c-row>
          <c-row class="grid" gutter="20" align="right">
            <c-col span="12"><div class="grid-content bg-color-light"></div></c-col>
            <c-col span="4"><div class="grid-content bg-color"></div></c-col>
          </c-row>

          <style>
            .grid {
              margin-bottom: 12px;
            }

            .grid .grid-content {
              width: 100%;
              text-align: center;
              height: 50px;
              color: white;
            }

            .grid .grid-content.bg-color {
              background-color: #99a9bf;
            }

            .grid .grid-content.bg-color-light {
              background-color: #d3dce6;
            }
          </style>
          `,
        codeStr5: `
          <c-row gutter="20" class="grid">
            <c-col
              :xs="{ span: 24 }"
              sm="12"
              :md="4"
              :lg="{ span: 2, offset: '1' }"
              :xl="6"
              :xxl="8"
            ><div class="grid-content bg-color-light"></div></c-col>
            <c-col
              :xs="{ span: 24 }"
              sm="12"
              :md="8"
              :lg="{ span: 8, offset: '1' }"
              :xl="6"
              :xxl="4"
            ><div class="grid-content bg-color"></div></c-col>
            <c-col
              :xs="{ span: 24 }"
              sm="12"
              :md="8"
              :lg="{ span: 8, offset: '1' }"
              :xl="6"
              :xxl="4"
            ><div class="grid-content bg-color-light"></div></c-col>
            <c-col
              :xs="{ span: 24 }"
              sm="12"
              :md="4"
              :lg="{ span: 2, offset: '1' }"
              :xl="6"
              :xxl="8"
            ><div class="grid-content bg-color"></div></c-col>
          </c-row>

          <style>
            .grid {
              margin-bottom: 12px;
            }

            .grid .grid-content {
              width: 100%;
              text-align: center;
              height: 50px;
              color: white;
            }

            .grid .grid-content.bg-color {
              background-color: #99a9bf;
            }

            .grid .grid-content.bg-color-light {
              background-color: #d3dce6;
            }
          </style>
          `,

      }
    }
  }
</script>

<style lang="scss" scoped>
  .grid {
    width: 100%;
    margin-bottom: 12px;
  }

  .grid .grid-content {
    width: 100%;
    text-align: center;
    height: 50px;
    color: white;
  }

  .grid .grid-content.bg-color {
    background-color: #99a9bf;
  }

  .grid .grid-content.bg-color-light {
    background-color: #d3dce6;
  }
</style>