<template>
  <div class="c-col" :class="[span && `col-${span}`]">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "c-col",
    props: {
      span: {
        type: [Number, String],
      }
    },
  }
</script>

<style lang="scss" scoped>
  @import '../../style/theme';

  .c-col {
    width: 100%;

    $col-prefix: 'col-';
    @for $i from 1 through 24{
      &.#{$col-prefix}#{$i} {
        width: $i / 24 * 100%;
      }
    }
  }

</style>