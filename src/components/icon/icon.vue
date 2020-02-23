<template>
  <svg class="icon" aria-hidden="true" @click="$emit('click', $event)">
    <use :xlink:href="`#icon-${type}`" />
  </svg>
</template>

<script>
import "../../utils/iconfont";
export default {
  name: "CIcon",
  props: {
    type: {
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
.icon {
  width: 1.3em;
  height: 1.3em;
  vertical-align: -0.3em;
  fill: currentColor;
  overflow: hidden;
}
</style>
