<template>
  <div class="c-pagination">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "CPagination",
  props: {
    current: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
    pageSize: {
      type: Number,
      default: 10
    },
    hideOnSinglePage: {
      type: Boolean,
      default: false,
    }
  },
};
</script>

<style lang="scss" scoped>
@import "../../style/var";

.c-pagination {

}
</style>
