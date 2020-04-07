<template>
  <div class="demo">
    <h2>基础用法</h2>
    <p>用于布局的容器组件，方便快速搭建页面的基本结构</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <c-layout>
          <c-header height="50">Header</c-header>
          <c-main>Main</c-main>
          <c-footer height="50">Footer</c-footer>
        </c-layout>

        <c-layout>
          <c-aside width="200">Aside</c-aside>
          <c-layout>
            <c-header height="50">Header</c-header>
            <c-main>Main</c-main>
            <c-footer height="50">Footer</c-footer>
          </c-layout>
        </c-layout>

        <c-layout>
          <c-header height="50">Header</c-header>
          <c-layout>
            <c-aside width="200">Aside</c-aside>
            <c-main>Main</c-main>
          </c-layout>
          <c-footer height="50">Footer</c-footer>
        </c-layout>

        <c-layout>
          <c-header height="50">Header</c-header>
          <c-layout>
            <c-aside width="200">Aside</c-aside>
            <c-layout>
              <c-main>Main</c-main>
              <c-footer height="50">Footer</c-footer>
            </c-layout>
          </c-layout>
        </c-layout>
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
  import CLayout from "../../../src/components/layout";
  import CHeader from "../../../src/components/header";
  import CAside from "../../../src/components/aside";
  import CMain from "../../../src/components/main";
  import CFooter from "../../../src/components/footer";
  import CIcon from '../../../src/components/icon/icon'
  import mixin from '../scripts/mixin'

  export default {
    name: 'Demo',
    mixins: [mixin],
    components: {
      CLayout,
      CHeader,
      CAside,
      CMain,
      CFooter,
      CIcon,
    },
    data() {
      return {
        codeStr: `
          <c-layout>
            <c-header height="50">Header</c-header>
            <c-main>Main</c-main>
            <c-footer height="50">Footer</c-footer>
          </c-layout>

          <c-layout>
            <c-aside width="200">Aside</c-aside>
            <c-layout>
              <c-header height="50">Header</c-header>
              <c-main>Main</c-main>
              <c-footer height="50">Footer</c-footer>
            </c-layout>
          </c-layout>

          <c-layout>
            <c-header height="50">Header</c-header>
            <c-layout>
              <c-aside width="200">Aside</c-aside>
              <c-main>Main</c-main>
            </c-layout>
            <c-footer height="50">Footer</c-footer>
          </c-layout>

          <c-layout>
            <c-header height="50">Header</c-header>
            <c-layout>
              <c-aside width="200">Aside</c-aside>
              <c-layout>
                <c-main>Main</c-main>
                <c-footer height="50">Footer</c-footer>
              </c-layout>
            </c-layout>
          </c-layout>

          <style>
            header,
            footer,
            main,
            aside, {
              font-size: 16px;
              font-weight: bold;
              color: #2E2E32;
            }
            header,
            footer {
              background-color: #99a9bf;
              line-height: 50px;
              text-align: center;
            }

            main,
            aside {
              background-color: #d3dce6;
              line-height: 70px;
              text-align: center;
            }

            aside {
              background-color: #80889c;
            }
          </style>
        `,

      }
    }
  }
</script>

<style lang="scss" scoped>
  .component-wrapper-demo>div{
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 10px;
    }
  }
  header,
  footer,
  main,
  aside, {
    font-size: 16px;
    font-weight: bold;
    color: #2E2E32;
  }
  header,
  footer {
    background-color: #99a9bf;
    line-height: 50px;
    text-align: center;
  }

  main,
  aside {
    background-color: #d3dce6;
    line-height: 70px;
    text-align: center;
  }

  aside {
    background-color: #80889c;
  }
</style>