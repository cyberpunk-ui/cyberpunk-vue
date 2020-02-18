<template>
  <transition name="carousel">
    <div class="c-carousel-item" v-if="visible">
      <slot></slot>
    </div>
  </transition>

</template>

<script>
export default {
  name: "CCarouselItem",
  props: {
    name:{
      type: [String, Number],
      required: true
    },
  },
  data(){
    return {
      selected: undefined,
    }
  },
  computed: {
    visible(){
      return this.selected === this.name
    }
  }
};
</script>

<style lang="scss" scoped>
  @import "../../style/var";

  .c-carousel-item {

  }

  .carousel-enter{
    transform: translateX(100%);
  }
  .carousel-leave-to {
    transform: translateX(-100%);
  }
  .carousel-leave-active {
    position: absolute;
    left: 0;
    top: 0;
  }
  .carousel-enter-active, .carousel-leave-active {
    transition: all 1s;
  }
</style>
