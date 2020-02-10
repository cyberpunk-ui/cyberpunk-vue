<template>
  <footer class="c-footer" :style="footerStyle">
    <slot></slot>
  </footer>
</template>

<script>
  export default {
    name: "CFooter",
    computed:{
      footerStyle(){
        return {
          height: this.height + 'px',
        }
      }
    },
    props:{
      height: {
        type: [Number, String],
        default: 60
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../style/var';

  .c-footer {
    flex-shrink: 0;
  }
</style>