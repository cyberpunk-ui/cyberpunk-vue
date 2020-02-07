<template>
  <div class="c-tabs">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "CTabs",
    props: {
      activeName: {
        type: String,
        required: true,
      },
      direction: {
        type: String,
        default: 'horizontal',
        validator(value) {
          return ['horizontal', 'vertical'].indexOf(value) >= 0
        }
      }
    },
    created(){
      this.$emit('update:selected', 'xxx')
    },
  }
</script>

<style lang="scss" scoped>
  @import '../../style/theme';

  .c-tabs {

  }
</style>