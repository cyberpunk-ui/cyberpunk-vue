<template>
  <button
    class="c-button"
    :class="[iconPosition, {disabled}, size]"
    @click="$emit('click')"
  >
    <c-icon v-if="icon && !loading" :type="icon" class="c-button-icon"></c-icon>
    <c-icon
      v-if="loading"
      type="loading"
      class="c-button-loading-icon"
    ></c-icon>
    <span class="c-button-content">
      <slot></slot>
    </span>
  </button>
</template>

<script>
import Icon from "../icon/icon";
export default {
  name: "CButton",
  components: { "c-icon": Icon },
  props: {
    icon: {
      type: String
    },
    iconPosition: {
      type: String,
      default: "left"
    },
    loading: {
      type: Boolean
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      validator: value => {
        return ['mini', 'small', 'large'].indexOf(value) >= 0
      }
    },
  }
};
</script>

<style lang="scss" scoped>
@import "../../style/var";
@import "../../style/animation";

.c-button {
  display: inline-flex;
  position: relative;
  cursor: pointer;
  margin: 0;
  border: none;
  height: $button-height;
  line-height: $button-height;
  padding: $button-padding;
  font-size: $base-font-size;
  font-weight: $button-font-weight;
  color: $black-color;
  transition: all 0.3s;
  background-color: $primary-color;
  letter-spacing: $button-text-space;
  vertical-align: middle;
  /*clip-path: polygon(0 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%);*/
  &:not(.disabled):focus {
    z-index: 1;
    outline: 1px solid $secondary-color;
  }
  &:hover {
    background-color: darken($primary-color, 8%);
  }
  &.left {
    .c-button-loading-icon,
    .c-button-icon {
      order: 1;
    }
    .c-button-content {
      order: 2;
    }
  }
  &.right {
    .c-button-loading-icon,
    .c-button-icon {
      order: 2;
    }
    .c-button-content {
      order: 1;
    }
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #22edfc;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:not(.disabled):hover:before {
    transform-origin: left center;
    transform: scaleX(1);
  }
  &.large{
    height: $button-large-height;
    padding: $button-large-padding;
    font-size: 16px;
  }
  &.small{
    height: $button-small-height;
    padding: $button-small-padding;
  }
  &.mini{
    height: $button-mini-height;
    padding: $button-mini-padding;
    font-size: 12px;
  }


  &.disabled {
    background-color: $primary-dark-color;
    cursor: not-allowed;
    outline: none;
  }

  .c-button-loading-icon {
    animation: spin 1.2s infinite linear;
  }

  .c-button-icon,
  .c-button-content {
    position: relative;
  }
}
</style>
