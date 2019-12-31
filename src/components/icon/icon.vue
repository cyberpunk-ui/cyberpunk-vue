<template>
  <svg class="icon" aria-hidden="true">
    <use :xlink:href="`#icon-${type}`" />
  </svg>
</template>

<script>
  export default {
    name: "c-icon",
    props: {
       type: {
         type: String,
       }
    }
  }
</script>

<style lang="scss" scoped>
  .icon {
    width: 1.3em; height: 1.3em;
    vertical-align: -0.3em;
    fill: currentColor;
    overflow: hidden;
  }
</style>