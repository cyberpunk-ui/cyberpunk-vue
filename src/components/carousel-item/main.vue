<template>
  <transition name="carousel" >
    <div class="c-carousel-item" v-if="visible" :class="{reverse}">
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
      reverse: true,
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


  .carousel-enter{
    transform: translateX(100%);
  }
  .carousel-leave-to {
    transform: translateX(-100%);
  }
  .carousel-enter.reverse {
    transform: translateX(-100%);
  }
  .carousel-leave-to.reverse {
    transform: translateX(100%);
  }
  .carousel-leave-active {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
  .carousel-enter-active, .carousel-leave-active {
    transition: all 1s;
  }
</style>
