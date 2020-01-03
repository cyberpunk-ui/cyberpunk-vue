<template>
  <button class="c-button" :class="[iconPosition]" @click="$emit('click')">
    <c-icon v-if="icon && !loading" :type="icon" class="c-button-icon"></c-icon>
    <c-icon v-if="loading" type="loading" class="c-button-loading-icon"></c-icon>
    <span class="c-button-content">
      <slot></slot>
    </span>
  </button>
</template>

<script>
  import Icon from '../icon/icon';
  export default {
    name: "c-button",
    components: {'c-icon': Icon},
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
    position: relative;
    cursor: pointer;
    margin: 0;
    border: none;
    padding: $button-padding;
    font-size: $base-font-size;
    font-weight: $button-font-weight;
    color: $black-color;
    transition: all 0.3s;
    background-color: $primary-color;
    letter-spacing: $button-text-space;
    vertical-align: middle;
    /*clip-path: polygon(0 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%);*/
    &:focus {
      z-index: 1;
      outline: 1px solid $secondary-color;
    }
    &:hover {
      background-color: darken($primary-color, 8%);
    }
    &.left {
      .c-button-loading-icon,
      .c-button-icon {
        float: left;
      }
      .c-button-content {
        float: right;
      }
    }
    &.right {
      .c-button-loading-icon,
      .c-button-icon {
        float: right;
      }
      .c-button-content {
        float: left;
      }
    }

    &:before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: #22edfc;
      transform-origin: right;
      transform: scaleX(0);
      transition: transform 0.4s cubic-bezier(0.4, 0.0, 0.2, 1);
    }

    &:hover:before{
      transform-origin: left center;
      transform: scaleX(1);
    }

    .c-button-loading-icon {
      animation: spin 1.2s infinite linear;
    }

    .c-button-icon,
    .c-button-content {
      position: relative;
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