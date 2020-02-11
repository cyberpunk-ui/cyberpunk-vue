<template>
  <div class="c-tabs-head">
    <slot></slot>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "CTabsHead",
  inject: ["eventBus"]
};
</script>

<style lang="scss" scoped>
@import "../../style/var";

.c-tabs-head {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  & .actions-wrapper {
    margin-left: auto;
  }
}
</style>
