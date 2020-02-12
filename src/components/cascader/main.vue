<template>
  <div class="c-cascader">
    <span class="trigger" @click="visible = !visible">
      <slot></slot>
    </span>
    <div class="popover" v-if="visible">
      <cascader-items :items="source" :selected="selected" @update:selected="onUpdateSelected"></cascader-items>
    </div>
  </div>
</template>

<script>
import cascaderItems from "./items";
export default {
  name: "CCascader",
  components: {
    "cascader-items": cascaderItems
  },
  props: {
    source: {
      type: Array
    },
    selected: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      visible: false
    };
  },
  methods: {
    onUpdateSelected(newSelected){
      this.$emit('update:selected', newSelected);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../style/var";

.c-cascader {
  position: relative;
  .popover {
    position: absolute;
    top: 100%;
    left: 0;
  }
}
</style>
