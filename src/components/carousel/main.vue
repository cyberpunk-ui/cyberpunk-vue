<template>
  <div class="c-carousel" :style="styles">
    <div class="c-carousel-wrapper ">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CCarousel",
    props: {
      height: {
        type: [String, Number]
      },
      selected: {
        type: [String, Number]
      },
      autoplay: {
        type: Boolean,
        default: true
      },
    },
    computed: {
      styles() {
        return {
          height: `${this.height}px`,
        }
      }
    },
    mounted() {
      this.updateChildren()
    },
    updated() {
      this.updateChildren()
    },
    methods: {
      updateChildren() {
        const first = this.$children
        const selected = this.selected || first.name
        this.$children.forEach(vm => {
          vm.selected = selected
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../style/var";

  .c-carousel {
    display: inline-block;

    &-wrapper {
      overflow: hidden;
      position: relative;
    }
  }
</style>
