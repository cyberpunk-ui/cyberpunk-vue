<template>
  <div class="c-col" :class="colClasses" :style="colStyles">
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
    computed: {
      colClasses() {
        const {span, offset} = this;
        const createClasses = this.createClasses;
        return [
          ...createClasses(span, 'span'),
          ...createClasses(offset, 'offset'),
        ];
      },
      colStyles() {
        return {padding: `0 ${this.gutter / 2}px`};
      },
    },
    methods: {
      createClasses(value, prefix='') {
        if (!value) return [];
        let array = [];
        if (typeof value === 'object') {
          value.span && array.push(`col-${prefix}${value.span}`);
          value.offset && array.push(`col-${prefix}${value.offset}`);
        } else {
          prefix === 'span' && array.push(`col-${value.span}`);
          prefix === 'offset' && array.push(`offset-${value.offset}`);
        }
        return array;
      }
    }
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