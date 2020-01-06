<template>
  <div class="c-col" :class="colClasses" :style="{padding: `0 ${this.gutter / 2}px`}">
    <div class="c-col-wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  const validator = (value) => {
    let valid = true;
    if (typeof value === 'object') {
      for (let item in value) {
        valid = ['offset', 'span'].includes(item);
      }
    }
    return valid;
  };

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
      xs: {type: [String, Number, Object], validator},
      sm: {type: [String, Number, Object], validator},
      md: {type: [String, Number, Object], validator},
      lg: {type: [String, Number, Object], validator},
      xl: {type: [String, Number, Object], validator},
      xxl: {type: [String, Number, Object], validator},
    },
    computed: {
      colClasses() {
        const {span, offset, xs, sm, md, lg, xl, xxl} = this;
        const createClasses = this.createClasses;
        return [
          ...createClasses(span, 'span'),
          ...createClasses(offset, 'offset'),
          ...createClasses(xs, 'xs-'),
          ...createClasses(sm, 'sm-'),
          ...createClasses(md, 'md-'),
          ...createClasses(lg, 'lg-'),
          ...createClasses(xl, 'xl-'),
          ...createClasses(xxl, 'xxl-'),
        ];
      },
      colStyles() {
        return {
          paddingLeft: `${this.gutter / 2}px`,
          paddingRight: this.colStyles.paddingLeft,
        };
      },
    },
    methods: {
      createClasses(value, prefix='') {
        if (!value) return [];
        let array = [];
        if (typeof value === 'object') {
          // {span: 1, offset: 1}
          value.span && array.push(`col-${prefix}${value.span}`);
          value.offset && array.push(`offset-${prefix}${value.offset}`);
          return array;
        }
        if (prefix === 'span' || prefix === 'offset') {
          // span="1" & offset="1"
          prefix === 'span' && array.push(`col-${value}`);
          prefix === 'offset' && array.push(`offset-${value}`);
          return array;
        }
        if (typeof value !== 'object') {
          // xs = "1"
          array.push(`col-${prefix}${value}`);
          array.push(`offset-${prefix}0`);
          return array;
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../style/theme';

  .c-col {
    width: 100%;
    $class-prefix: col-;
    @for $i from 1 through 24{
      &.#{$class-prefix}#{$i} {
        width: $i / 24 * 100%;
      }
    }
    $class-prefix: offset-;
    @for $i from 1 through 24{
      &.#{$class-prefix}#{$i} {
        margin-left: $i / 24 * 100%;
      }
    }

    @media (max-width: 576px) {
      $class-prefix: col-xs-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n / 24) * 100%;
        }
      }
      $class-prefix: offset-xs-;
      @for $n from 0 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }
    @media (min-width: 577px) {
      $class-prefix: col-sm-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n / 24) * 100%;
        }
      }
      $class-prefix: offset-sm-;
      @for $n from 0 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }
    @media (min-width: 769px){ // 770
      $class-prefix: col-md-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n / 24) * 100%;
        }
      }
      $class-prefix: offset-md-;
      @for $n from 0 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }
    @media (min-width: 993px) {
      $class-prefix: col-lg-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n / 24) * 100%;
        }
      }
      $class-prefix: offset-lg-;
      @for $n from 0 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }
    @media (min-width: 1201px) {
      $class-prefix: col-xl-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n / 24) * 100%;
        }
      }
      $class-prefix: offset-xl-;
      @for $n from 0 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }
    @media (min-width: 1601px) {
      $class-prefix: col-xxl-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n / 24) * 100%;
        }
      }
      $class-prefix: offset-xxl-;
      @for $n from 0 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }
  }

</style>