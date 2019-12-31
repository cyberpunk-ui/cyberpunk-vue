<template>
  <button class="c-button" :class="[iconPosition]" @click="$emit('click')">
    <c-icon v-if="icon && !loading" :type="icon" class="c-button-icon"></c-icon>
    <c-icon v-if="loading" type="loading" class="c-button-loading-icon"></c-icon>
    <slot class="c-button-content"></slot>
  </button>
</template>

<script>
  export default {
    name: "c-button",
    props: {
       icon: {
         type: String,
       },
       iconPosition: {
         type: String,
         default: 'left',
       },
       loading: {
         type: Boolean,
       }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../style/theme';

  .c-button {
    cursor: pointer;
    padding: $button-padding;
    font-size: $base-font-size;
    color: $black-color;
    background-color: $primary-color;
    border: none;
    outline: 2px solid $primary-color;
    transition: all 0.3s;
    letter-spacing: $button-text-space;
    vertical-align: middle;
    &:focus {
      outline: 2px solid $secondary-color;
    }
    &:hover {
      background-color: darken($primary-color, 8%);
    }
    &.left {
      .c-button-icon {
        float: left;
      }
      .c-button-content {
        float: right;
      }
    }
    &.right {
      .c-button-icon {
        float: right;
      }
      .c-button-content {
        float: left;
      }
    }

    .c-button-loading-icon {
      animation: spin 1.2s infinite linear;
    }

  }

  @keyframes spin {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>