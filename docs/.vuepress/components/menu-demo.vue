<template>
  <div class="demo">
    <h2>Top bar</h2>
    <p>Top bar NavMenu can be used in a variety of scenarios.</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <c-menu
          :selected.sync="selectedMenu"
          :multiple="false"
        >
          <c-menu-item name="home">Home</c-menu-item>
          <c-sub-menu name="about">
            <template slot="title">About</template>
            <c-menu-item name="about1">About1</c-menu-item>
            <c-menu-item name="about2">About1</c-menu-item>
            <c-sub-menu name="contact">
              <template slot="title">Contact</template>
              <c-menu-item name="qq">QQ</c-menu-item>
              <c-menu-item name="phone">Phone</c-menu-item>
              <c-menu-item name="wechat">WeChat</c-menu-item>
            </c-sub-menu>
          </c-sub-menu>
          <c-menu-item name="hire">Hire</c-menu-item>
          <c-menu-item name="google">
            <a href="https://google.com" target="_blank">Google</a>
          </c-menu-item>
        </c-menu>
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
    <h2>Side bar</h2>
    <p>Vertical NavMenu with sub-menus.</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <c-menu
          :selected.sync="selectedMenu2"
          :multiple="false"
          direction="vertical"
          style="width: 265px;"
        >
          <c-menu-item name="home">Home</c-menu-item>
          <c-sub-menu name="about">
            <template slot="title">About</template>
            <c-menu-item name="about1">About1</c-menu-item>
            <c-menu-item name="about2">About1</c-menu-item>
            <c-sub-menu name="contact">
              <template slot="title">Contact</template>
              <c-menu-item name="qq">QQ</c-menu-item>
              <c-menu-item name="phone">Phone</c-menu-item>
              <c-menu-item name="wechat">WeChat</c-menu-item>
            </c-sub-menu>
          </c-sub-menu>
          <c-menu-item name="hire">Hire</c-menu-item>
          <c-menu-item name="google">
            <a href="https://google.com" target="_blank">Google</a>
          </c-menu-item>
        </c-menu>
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
  </div>
</template>

<script>
  import CMenu from '../../../src/components/menu/main'
  import CMenuItem from '../../../src/components/menu-item/main'
  import CSubMenu from '../../../src/components/sub-menu/main'
  import CIcon from '../../../src/components/icon/icon'
  import mixin from '../scripts/mixin'

  export default {
    name: 'Demo',
    mixins: [mixin],
    components: {
      CMenu,
      CMenuItem,
      CSubMenu,
      CIcon,
    },
    data() {
      return {
        selectedMenu: ['home'],
        selectedMenu2: ['home'],
        codeStr: `
          <c-menu :selected.sync="selectedMenu" :multiple="false">
            <c-menu-item name="home">Home</c-menu-item>
            <c-sub-menu name="about">
              <template slot="title">About</template>
              <c-menu-item name="about1">About1</c-menu-item>
              <c-menu-item name="about2">About1</c-menu-item>
              <c-sub-menu name="contact">
                <template slot="title">Contact</template>
                <c-menu-item name="qq">QQ</c-menu-item>
                <c-menu-item name="phone">Phone</c-menu-item>
                <c-menu-item name="wechat">WeChat</c-menu-item>
              </c-sub-menu>
            </c-sub-menu>
            <c-menu-item name="hire">Hire</c-menu-item>
            <c-menu-item name="google">
              <a href="https://google.com" target="_blank">Google</a>
            </c-menu-item>
          </c-menu>
        `,
        codeStr2: `
          <c-menu
            :selected.sync="selectedMenu2"
            :multiple="false"
            direction="vertical"
            style="width: 265px;"
          >
            <c-menu-item name="home">Home</c-menu-item>
            <c-sub-menu name="about">
              <template slot="title">About</template>
              <c-menu-item name="about1">About1</c-menu-item>
              <c-menu-item name="about2">About1</c-menu-item>
              <c-sub-menu name="contact">
                <template slot="title">Contact</template>
                <c-menu-item name="qq">QQ</c-menu-item>
                <c-menu-item name="phone">Phone</c-menu-item>
                <c-menu-item name="wechat">WeChat</c-menu-item>
              </c-sub-menu>
            </c-sub-menu>
            <c-menu-item name="hire">Hire</c-menu-item>
            <c-menu-item name="google">
              <a href="https://google.com" target="_blank">Google</a>
            </c-menu-item>
          </c-menu>
        `,
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>