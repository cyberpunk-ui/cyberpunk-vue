<template>
  <div class="c-data-picker">
    <c-popover position="bottom">
      <template slot="content">
        <div :class="c('calendar')">
          <div :class="c('nav')">
            <span :class="c('icon')"><c-icon type="double-arrow-left"></c-icon></span>
            <span :class="c('icon')"><c-icon type="arrow-lift"></c-icon></span>
            <span :class="c('yearAndMouth')">
              <span>2020年 </span>
              <span>12月</span>
            </span>
            <span :class="c('icon')"><c-icon type="arrow-right"></c-icon></span>
            <span :class="c('icon')"><c-icon type="double-arro-right"></c-icon></span>
          </div>
          <div :class="c('content')">
            <div :class="c('row')" v-for="week in 6" :key="week">
            <span :class="c('cell')" v-for="day in 7" :key="day">
              {{ day }}
            </span>
            </div>
          </div>
          <div :class="c('button')">
            <span :class="c('link')">今天</span>
          </div>
        </div>
      </template>
      <c-input></c-input>
    </c-popover>
  </div>
</template>

<script>
  import CInput from '../input'
  import CPopover from '../popover'
  import CIcon from '../icon'

  export default {
    name: "CDatePicker",
    comments: {CInput, CPopover, CIcon},
    data() {
      return {
        value: new Date()
      }
    },
    methods: {
      c(...names) {
        return names.map(name => `c-data-picker-${name}`);
      },
    }
  };
</script>

<style lang="scss" scoped>
  @import "../../style/var";

  .c-data-picker {
    &-calendar {
      margin: -0.5em -1em;
    }
    &-nav {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid $primary-dark-color;
      padding: 0.5em 1em;
    }
    &-icon {
      cursor: pointer;
      color: darken($white-color, 50%);
      transition: all .3s;

      &:hover {
        color: $white-color;
      }
    }
    &-button {
      border-top: 1px solid $primary-dark-color;
      padding: 0.5em 1em;
      font-size: 14px;
      text-align: center;
    }
    &-link{
      color: $white-color;
      transition: all .3s;
    }
    &-link:hover {
      color: $primary-color;
      cursor: pointer;
    }

    &-navItem,
    &-cell {
      width: 32px;
      height: 32px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      &:hover {
        background-color: $grey-light-color;
      }
    }
  }
</style>
