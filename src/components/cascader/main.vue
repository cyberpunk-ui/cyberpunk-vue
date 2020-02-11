<template>
  <div class="c-cascader">
    <div class="trigger" @click="visible = !visible">
      <slot></slot>
    </div>
    <div class="popover" v-if="visible">
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
    data() {
      return {
        visible: false
      }
    },
  }
</script>

<style lang="scss" scoped>
  @import '../../style/var';

  .c-cascader {
    position: relative;
    .popover {
      position: absolute;
    }
  }
</style>