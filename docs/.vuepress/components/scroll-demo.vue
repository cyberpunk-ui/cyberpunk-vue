<template>
  <div class="demo">
    <h2>Basic usage</h2>
    <p>You can use Vue's own style to set width and height.</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <c-scroll style="width: 100%;height:600px;">
          <p v-for="index in 5" :key="index"><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor iure iusto officiis! Adipisci aspernatur atque aut, doloremque exercitationem laborum magnam minus perferendis placeat quia repudiandae temporibus unde vel vero voluptatem.</span><span>Asperiores atque dignissimos dolorem excepturi inventore ipsa iste minus non, quam recusandae totam ullam voluptates! Doloremque enim nostrum officia vero? Ad itaque sequi voluptatum. Commodi dignissimos distinctio mollitia nam officia?</span><span>Aliquid amet asperiores blanditiis commodi, distinctio eum inventore ipsam iste libero modi nobis non similique sit? Consequatur facilis, maiores minima necessitatibus neque perspiciatis placeat praesentium quaerat, quam saepe tempora veniam.</span></p>
        </c-scroll>
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
  </div>
</template>

<script>
  import CButton from '../../../src/components/button/button'
  import CScroll from '../../../src/components/scroll/main'
  import CIcon from '../../../src/components/icon/icon'
  import mixin from '../scripts/mixin'

  export default {
    name: 'ButtonDemo',
    mixins: [mixin],
    components: {
      CScroll,
      CButton,
      CIcon
    },
    data() {
      return {
        codeStr: `
          <c-scroll style="width: 100%;height:600px;">
            <p v-for="index in 5" :key="index">Lorem ipsum dolor sit amet ...</p>
          </c-scroll>
        `,
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>