<template>
  <input
    class="c-input"
    :placeholder="placeholder"
    :class="size"
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
      placeholder: {
        type: String,
      },
      size: {
        type: String,
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
    background: rgba(grey, 0.5);
    line-height: $input-default-height;
    font-size: $input-default-font-size;
    transition: box-shadow 0.4s ease;
    padding: 0 10px;
    color: rgba(white, 0.9);

    &:focus {
      box-shadow: inset 0 -2px 0 0 #fdee06;
      outline: none;
    }

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
  }
</style>