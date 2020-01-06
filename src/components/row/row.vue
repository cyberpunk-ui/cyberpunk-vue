<template>
  <div class="c-row" :style="rowStyles">
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
    computed: {
      rowStyles() {
        const {gutter} = this;
        this.$children.forEach(vm => {
          vm.gutter = this.gutter;
        });
        return {
          marginLeft: `${-gutter / 2}px`,
          marginRight: `${-gutter / 2}px`,
        }
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