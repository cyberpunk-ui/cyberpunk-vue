<template>
  <div class="c-cascader">
    <div class="trigger">
      <slot></slot>
    </div>
    <div class="popover">
      <cascader-items :items="source"></cascader-items>
    </div>
  </div>
</template>

<script>
  import cascaderItems from './items';
  export default {
    name: "CCascader",
    components: {
      'cascader-items': cascaderItems
    },
    props: {
      source: {
        type: Array,
      }
    },
  }
</script>

<style lang="scss" scoped>
  @import '../../style/var';

  .c-cascader {

  }
</style>