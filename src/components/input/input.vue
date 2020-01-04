<template>
  <input
    class="c-input"
    :value="value"
    :placeholder="placeholder"
    :class="size"
    :disabled="disabled"
    :readonly="readonly"
    @change="$emit('change', $event)"
    @focus="$emit('focus', $event)"
    @input="$emit('input', $event.target.value)"
    @blur="$emit('blur', $event)"
  />
</template>

<script>
  export default {
    name: "c-input",
    props: {
      // htmlType: {
      //   type: String,
      //   default: 'text',
      // },
      value: {
        type: String | Number,
      },
      placeholder: {
        type: String,
      },
      size: {
        type: String,
      },
      disabled: {
        type: Boolean,
        default: false,
      },
      readonly: {
        type: Boolean,
        default: false,
      },
    },
  }
</script>

<style lang="scss" scoped>
  @import '../../style/theme';

  .c-input {
    border: 0;
    margin: 0;
    box-shadow: inset 0 -1px 0 0 rgba(black, 0.5);
    background: $input-background-color;
    line-height: $input-default-height;
    font-size: $input-default-font-size;
    transition: all 0.4s ease;
    padding: 0 10px;
    color: rgba(white, 0.9);
    letter-spacing: $base-text-space;
    font-weight: 500;
    &:focus {
      box-shadow: inset 0 -2px 0 0 #fdee06;
      outline: none;
    }
    &:hover {
      background: lighten($input-background-color, 10%);
    }

    // size.
    &.large {
      line-height: $input-large-height;
      font-size: $input-large-font-size;
      padding: $input-large-padding;
    }
    &.small {
      line-height: $input-small-height;
      font-size: $input-small-font-size;
      padding: $input-small-padding;
    }
    &.mini {
      line-height: $input-mini-height;
      font-size: $input-mini-font-size;
      padding: $input-mini-padding;
    }

    // disabled.
    &[disabled],
    &[readonly] {
      cursor: not-allowed;
    }
  }
</style>