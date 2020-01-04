<template>
  <div
    class="c-col"
    :class="[span && `col-${span}`, offset && `offset-${offset}`, ]"
    :style="{padding: `0 ${gutter / 2}px`}"
  >
    <div class="c-col-wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "c-col",
    data() {
      return {
        gutter: 0,
      }
    },
    props: {
      span: {
        type: [Number, String],
      },
      offset: {
        type: [Number, String],
      },
    },
  }
</script>

<style lang="scss" scoped>
  @import '../../style/theme';
  $col-prefix: 'col-';
  $offset-prefix: 'offset-';

  .c-col {
    width: 100%;

    @for $i from 1 through 24{
      &.#{$col-prefix}#{$i} {
        width: $i / 24 * 100%;
      }
    }
    @for $i from 1 through 24{
      &.#{$offset-prefix}#{$i} {
        margin-left: $i / 24 * 100%;
      }
    }
  }

</style>