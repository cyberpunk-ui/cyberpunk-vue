<template>
  <div class="c-row" :style="{margin: `0 ${-gutter / 2}px`,}">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "c-row",
    props: {
      gutter: {
        type: [String, Number],
      }
    },
    mounted(){
      this.$children.forEach(vm => {
        vm.gutter = this.gutter;
      })
    },
  }
</script>

<style lang="scss" scoped>
  @import '../../style/theme';

  .c-row {
    display: flex;

  }
</style>