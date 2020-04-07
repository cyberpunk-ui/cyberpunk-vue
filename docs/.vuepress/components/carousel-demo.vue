<template>
  <div class="demo">
    <h2>Basic usage</h2>
    <p>In a limited space, play the same type of pictures, text and other content in a loop.</p>
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
        <c-icon class="icon-down" :type="isShowCode(0, 'icon')"></c-icon>
        <span class="lock-code-word">{{isShowCode(0, 'text')}}</span>
      </div>
    </div>
    <h2>Auto play</h2>
    <p>The carousel will switch automatically, and the interval can be set in milliseconds.</p>
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
        <c-icon class="icon-down" :type="isShowCode(1, 'icon')"></c-icon>
        <span class="lock-code-word">{{isShowCode(1, 'text')}}</span>
      </div>
    </div>
    <h2>Play in reverse order</h2>
    <p>The auto play sequence is reversed.</p>
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
        <c-icon class="icon-down" :type="isShowCode(2, 'icon')"></c-icon>
        <span class="lock-code-word">{{isShowCode(2, 'text')}}</span>
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