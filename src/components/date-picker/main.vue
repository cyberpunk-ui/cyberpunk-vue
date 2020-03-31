<template>
  <div class="c-data-picker">
    <c-popover position="bottom">
      <template slot="content">
        <div :class="c('calendar')">
          <div :class="c('nav')">
            <span :class="c('icon')"><c-icon type="double-arrow-left"></c-icon></span>
            <span :class="c('icon')"><c-icon type="arrow-lift"></c-icon></span>
            <span :class="c('yearAndMouth')">
              <span>{{value.getFullYear()}}年 </span>
              <span>{{value.getMonth()}}月</span>
            </span>
            <span :class="c('icon')"><c-icon type="arrow-right"></c-icon></span>
            <span :class="c('icon')"><c-icon type="double-arro-right"></c-icon></span>
          </div>
          <div :class="c('content')">
            <div >
              <span
                v-for="weekDay in weekDays"
                :key="weekDay"
                :class="c('weekDay')"
              >{{ weekDay }}</span>
            </div>
            <div :class="c('row')" v-for="row in 6" :key="row">
              <span :class="c('cell')" v-for="cell in 7" :key="cell">
                {{ getVisibleDay(row, cell).getDate() }}
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
  import dateHelper from '@/utils/date-helper'

  export default {
    name: "CDatePicker",
    comments: {CInput, CPopover, CIcon},
    data() {
      return {
        value: new Date(),
        weekDays: ['一', '二', '三', '四', '五', '六', '日']
      }
    },
    computed: {
      visibleDays(){
        let date = new Date(this.value.getFullYear(), this.value.getMonth(), 1)
        let first = dateHelper.firstDayOfMonth(date);
        let n = first.getDay();
        let array = [];
        let x = first - (n === 0 ? 6 : n - 1) * 3600 * 24 * 1000;
        for (let i = 0; i < 42; i++) {
          array.push(new Date(x + i * 3600 * 24 * 1000));
        }
        return array;
      },
    },
    methods: {
      c(...names) {
        return names.map(name => `c-data-picker-${name}`);
      },
      getVisibleDay(row, cell){
        return this.visibleDays[(row - 1) * 7 + cell - 1];
      }
    },
  };
</script>

<style lang="scss" scoped>
  @import "../../style/var";

  .c-data-picker {
    &-calendar {
      margin: -0.6em -1.1em;
      user-select: none;
      font-size: 14px;
    }

    /* header */
    &-nav {
      display: flex;
      justify-content: space-around;
      border-bottom: 1px solid $grey-light-color;
      padding: 0.6em 1em;
      font-size: 14px;
      font-weight: 600;
    }
    &-icon {
      cursor: pointer;
      color: darken($white-color, 50%);
      transition: all .3s;

      &:hover {
        color: $white-color;
      }
    }

    /* content */
    &-content{
      margin: 0.8em;
    }
    &-weekDay,
    &-cell {
      width: 32px;
      height: 32px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
    }
    &-cell:hover {
      background-color: $grey-light-color;
    }
    &-yearAndMouth {
      span {
        transition: all .3s;
        cursor: pointer;
        &:hover {
          color: $primary-color;
        }
      }
    }

    /* footer */
    &-button {
      border-top: 1px solid $grey-light-color;
      padding: 0.5em 1em;
      font-size: 14px;
      text-align: center;
      font-weight: 600;
    }
    &-link{
      color: $white-color;
      transition: all .3s;
    }
    &-link:hover {
      color: $primary-color;
      cursor: pointer;
    }
  }
</style>
