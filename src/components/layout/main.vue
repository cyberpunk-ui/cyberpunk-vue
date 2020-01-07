<template>
  <div class="c-layout" :class="layoutClass">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "CLayout",
    data(){
      return {
        layoutClass: {
          vertical: false
        },
      }
    },
    mounted: function () {
      this.$children.forEach(vm => {
        switch (vm.$options.name) {
          case 'CHeader':
          case 'CFooter':
            this.layoutClass.vertical = true;
            break;
        }
      })
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../style/theme';

  .c-layout {
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    &.vertical {
      flex-direction: column;
    }
  }
</style>