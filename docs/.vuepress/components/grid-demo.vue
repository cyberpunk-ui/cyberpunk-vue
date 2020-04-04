<template>
  <div class="demo">
    <h2>Basic layout</h2>
    <p>Create basic grid layout using columns.</p>
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
        <c-icon class="icon-down" :type="isShowCode(0, 'icon')"></c-icon>
        <span class="lock-code-word">{{isShowCode(0, 'text')}}</span>
      </div>
    </div>
    <h2>Column spacing</h2>
    <p>Column spacing is supported.</p>
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
        <c-icon class="icon-down" :type="isShowCode(1, 'icon')"></c-icon>
        <span class="lock-code-word">{{isShowCode(1, 'text')}}</span>
      </div>
    </div>
    <h2>Column offset</h2>
    <p>You can specify column offsets.</p>
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
        <c-icon class="icon-down" :type="isShowCode(2, 'icon')"></c-icon>
        <span class="lock-code-word">{{isShowCode(2, 'text')}}</span>
      </div>
    </div>
    <h2>Alignment</h2>
    <p>Use the flex layout to make flexible alignment of columns.</p>
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
        <c-icon class="icon-down" :type="isShowCode(3, 'icon')"></c-icon>
        <span class="lock-code-word">{{isShowCode(3, 'text')}}</span>
      </div>
    </div>
    <h2>Responsive Layout</h2>
    <p>Taking example by Bootstrap's responsive design, five breakpoints are preset: xs, sm, md, lg, xl and xxl.</p>
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
        <c-icon class="icon-down" :type="isShowCode(4, 'icon')"></c-icon>
        <span class="lock-code-word">{{isShowCode(4, 'text')}}</span>
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