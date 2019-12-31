<template>
  <button class="c-button">
    <slot />
  </button>
</template>

<script>
  export default {
    name: "c-button",
    props: {
       icon: {
         type: String,
       }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../theme.scss';

  .c-button {
    padding: $button-padding;
    font-size: $base-font-size;
    color: $black-color;
    background-color: $primary-color;
    border: none;
    outline: 2px solid $primary-color;
    transition: all 0.3s;
    letter-spacing: $button-text-space;
    &:focus {
      outline: 2px solid $secondary-color;
    }
    &:hover {
      background-color: darken($primary-color, 8%);
    }
  }
</style>