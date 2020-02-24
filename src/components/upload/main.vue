<template>
  <div class="c-upload">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "CUpload"
};
</script>

<style lang="scss" scoped>
@import "../../style/var";

.c-upload {
  flex: 1;
}
</style>
