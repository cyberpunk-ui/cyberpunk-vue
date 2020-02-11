<template>
  <main class="c-main">
    <slot></slot>
  </main>
</template>

<script>
export default {
  name: "CMain"
};
</script>

<style lang="scss" scoped>
@import "../../style/var";

.c-main {
  flex: 1;
}
</style>
