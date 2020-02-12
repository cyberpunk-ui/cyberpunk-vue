<template>
  <div class="c-cascader">
    <div class="trigger" @click="visible = !visible">
      <span v-if="result" class="result">{{result}}</span>
      <span v-else class="placeholder">请选择</span>
      <span class="arrow">
        <c-icon type="arrow-down"></c-icon>
      </span>
    </div>
    <div class="popover" v-if="visible">
      <cascader-items :items="source" :selected="selected" @update:selected="onUpdateSelected"></cascader-items>
    </div>
  </div>
</template>

<script>
import cascaderItems from "./items";
import Icon from "../icon/icon";

export default {
  name: "CCascader",
  components: {
    "cascader-items": cascaderItems,
    "c-icon": Icon,
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
  },
  computed: {
    result(){
      return this.selected.map(item => item.name).join('/')
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../style/var";

.c-cascader {
  position: relative;
  .trigger {
    position: relative;
    display: inline-block;
    color: $black-color;
    padding: $button-padding;
    font-size: $base-font-size;
    font-weight: $button-font-weight;
    background-color: $primary-color;
    letter-spacing: $button-text-space;
    vertical-align: middle;
    min-width: 160px;
    .result {
      display: inline-block;
      width: 115px;
      overflow: hidden;
      vertical-align: middle;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .placeholder {
      color: $primary-dark-color;
    }
    .arrow {
      position: absolute;
      right: 12px;
      background-color: $primary-color;
    }
  }
  .popover {
    position: absolute;
    top: 100%;
    left: 0;
  }
}
</style>
