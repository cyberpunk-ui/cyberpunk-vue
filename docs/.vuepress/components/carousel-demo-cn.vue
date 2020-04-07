<template>
  <div class="demo">
    <h2>基础用法</h2>
    <p>在有限空间内，循环播放同一类型的图片、文字等内容。</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <c-carousel :selected.sync="selectedCarousel" :autoplay="false">
          <c-carousel-item :name="index + ''" v-for="index in 6" :key="index">
            <div class="carousel-item">
              <h1>{{index}}</h1>
            </div>
          </c-carousel-item>
        </c-carousel>
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
    <h2>自动播放</h2>
    <p>轮播会自动切换，可设定间隔时间，单位为毫秒。</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <c-carousel :selected.sync="selectedCarousel2">
          <c-carousel-item :name="index + ''" v-for="index in 6" :key="index">
            <div class="carousel-item">
              <h1>{{index}}</h1>
            </div>
          </c-carousel-item>
        </c-carousel>
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
    <h2>倒序播放</h2>
    <p>自动播放顺序逆转。</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <c-carousel :selected.sync="selectedCarousel3" reverseAutoplay>
          <c-carousel-item :name="index + ''" v-for="index in 6" :key="index">
            <div class="carousel-item">
              <h1>{{index}}</h1>
            </div>
          </c-carousel-item>
        </c-carousel>
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
  </div>
</template>

<script>
  import CCarousel from '../../../src/components/carousel/main'
  import CCarouselItem from '../../../src/components/carousel-item/main'
  import CIcon from '../../../src/components/icon/icon'
  import mixin from '../scripts/mixin'

  export default {
    name: 'Demo',
    mixins: [mixin],
    components: {
      CCarousel,
      CCarouselItem,
      CIcon
    },
    data() {
      return {
        selectedCarousel: '1',
        selectedCarousel2: '1',
        selectedCarousel3: '1',
        codeStr: `
          <c-carousel :selected.sync="selectedCarousel" :autoplay="false">
            <c-carousel-item :name="index + ''" v-for="index in 6" :key="index">
              <div class="carousel-item">
                <h1>{{index}}</h1>
              </div>
            </c-carousel-item>
          </c-carousel>
        `,
        codeStr2: `
          <c-carousel :selected.sync="selectedCarousel2">
            <c-carousel-item :name="index + ''" v-for="index in 6" :key="index">
              <div class="carousel-item">
                <h1>{{index}}</h1>
              </div>
            </c-carousel-item>
          </c-carousel>
        `,
        codeStr3: `
          <c-carousel :selected.sync="selectedCarousel3" reverseAutoplay>
            <c-carousel-item :name="index + ''" v-for="index in 6" :key="index">
              <div class="carousel-item">
                <h1>{{index}}</h1>
              </div>
            </c-carousel-item>
          </c-carousel>
        `,

      }
    }
  }
</script>

<style lang="scss" scoped>
  .carousel-item {
    color: white;
    height: 300px;
    background-color: #333333;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>