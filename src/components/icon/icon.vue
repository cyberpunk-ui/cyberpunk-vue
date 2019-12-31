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
    width: 1.4em; height: 1.4em;
    vertical-align: -0.3em;
    fill: currentColor;
    overflow: hidden;
  }
</style>