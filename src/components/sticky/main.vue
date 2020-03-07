<template>
  <div class="c-sticky" :style="{height}" ref="sticky">
    <div class="c-sticky-wrapper" :class="classes" :style="{width, left, top, bottom}">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CSticky",
    props: {
      offsetTop: {
        type: Number,
        default: 0
      },
    },
    data(){
      return {
        sticky: false,
        width: undefined,
        height: undefined,
        top: undefined,
        left: undefined,
        bottom: undefined,
      }
    },
    computed: {
      classes() {
        return {
          sticky: this.sticky
        }
      }
    },
    mounted() {
      window.addEventListener('scroll', this.onScroll)
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.onScroll)
    },
    methods: {
      getOffsetTop(){
        const { top } = this.$refs.sticky.getBoundingClientRect()
        return top + window.scrollY
      },
      setStyle(){
        const { height, left, width } = this.$refs.sticky.getBoundingClientRect()
        this.height = `${height}px`
        this.left = `${left}px`
        this.width = `${width}px`
        this.top = `${this.offsetTop}px`;
      },
      resetStyle(){
        this.height = undefined
        this.left = undefined
        this.width = undefined
        this.top = undefined
        this.bottom = undefined
      },
      onScroll(){
        const top = this.getOffsetTop()
        if (window.scrollY > top - this.offsetTop) {
          this.setStyle()
          this.sticky = true
          return
        }
        this.resetStyle()
        this.sticky = false
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../style/var";
  .c-sticky {
    &-wrapper.sticky {
      z-index: 1;
      position: fixed;
    }
  }
</style>
