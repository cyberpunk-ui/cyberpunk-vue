<template>
  <div class="c-tabs-item">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "CTabsBody",
  inject: ["eventBus"]
};
</script>

<style lang="scss" scoped>
@import "../../style/var";

.c-tabs-item {
  padding: 12px;
  border: 1px solid $grey-light-color;
}
</style>
