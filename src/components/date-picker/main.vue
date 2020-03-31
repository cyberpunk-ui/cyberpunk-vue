<template>
  <div class="c-data-picker">
    <c-popover position="bottom">
      <template slot="content">
        <div :class="c('calendar')">
          <div :class="c('nav')">
            <span @click="onClickPrevYear" :class="c('icon')"><c-icon type="double-arrow-left"></c-icon></span>
            <span @click="onClickPrevMonth" :class="c('icon')"><c-icon type="arrow-lift"></c-icon></span>
            <span :class="c('yearAndMouth')">
              <span @click="onClickYear">{{displayDate.year}}年 </span>
              <span @click="onClickMonth">{{displayDate.month + 1}}月</span>
            </span>
            <span  @click="onClickNextMonth"  :class="c('icon')"><c-icon type="arrow-right"></c-icon></span>
            <span  @click="onClickNextYear" :class="c('icon')"><c-icon type="double-arro-right"></c-icon></span>
          </div>
          <div :class="c('content')">
            <div v-if="mode === 'month'">月</div>
            <div v-else-if="mode === 'year'">年</div>
            <div v-else>
              <div>
                <span
                  v-for="weekDay in weekDays"
                  :key="weekDay"
                  :class="c('weekDay')"
                >{{ weekDay }}</span>
              </div>
              <div :class="c('row')" v-for="row in 6" :key="row">
                <span
                  :class="[c('cell'), {
                    disabled: !isCurrentMouth(getVisibleDay(row, cell)),
                    active: isActiveDay(getVisibleDay(row, cell))
                  }]"
                  v-for="cell in 7"
                  :key="cell"
                  @click="onChangeValue(getVisibleDay(row, cell))"
                >
                  {{ getVisibleDay(row, cell).getDate() }}
                </span>
              </div>
            </div>
          </div>
          <div :class="c('button')">
            <span @click="setCurrentDay" :class="c('link')">今天</span>
          </div>
        </div>
      </template>
      <c-input :value.sync="currentDate"></c-input>
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
    props: {
      value: {
        type: Date,
        default: () => new Date()
      }
    },
    data() {
      console.log(this.value)
      const [year, month] = dateHelper.getYearMonthDate(this.value)
      return {
        mode: 'day', // day / month / year
        displayDate: {year, month},
        dateHelper,
        weekDays: ['一', '二', '三', '四', '五', '六', '日']
      }
    },
    computed: {
      visibleDays(){
        let date = new Date(this.displayDate.year,this.displayDate.month, 1)
        let first = dateHelper.firstDayOfMonth(date);
        let n = first.getDay();
        let array = [];
        let x = first - (n === 0 ? 6 : n - 1) * 3600 * 24 * 1000;
        for (let i = 0; i < 42; i++) {
          array.push(new Date(x + i * 3600 * 24 * 1000));
        }
        return array;
      },
      currentDate(){
        if (!this.value) {
          return "";
        }
        const [year, month, day] = dateHelper.getYearMonthDate(this.value);
        return `${year}-${dateHelper.pad2(month + 1)}-${dateHelper.pad2(day)}`;
      }
    },
    methods: {
      c(...names) {
        return names.map(name => `c-data-picker-${name}`);
      },
      setCurrentDay(){
        this.$emit('update:value', new Date())
      },
      getVisibleDay(row, cell){
        return this.visibleDays[(row - 1) * 7 + cell - 1];
      },
      onClickYear(){
        this.mode = 'year'
      },
      onClickMonth(){
        this.mode = 'month'
      },
      onChangeValue(date){
        if (this.isCurrentMouth(date)) {
          // this.value = date
          this.$emit('update:value', date)
        }
      },
      isCurrentMouth(date){
        const [year, month] = dateHelper.getYearMonthDate(date)
        return year === this.displayDate.year && month === this.displayDate.month
      },
      isActiveDay(date){
        const [year1, month1, day1] = dateHelper.getYearMonthDate(date)
        const [year2, month2, day2] = dateHelper.getYearMonthDate(this.value)
        return year1 === year2 && month1 === month2 && day1 === day2
      },
      onClickPrevYear(){
        const oldDate = new Date(this.displayDate.year, this.displayDate.month);
        const newDate = dateHelper.addYear(oldDate, -1);
        const [year, month] = dateHelper.getYearMonthDate(newDate);
        this.displayDate = { year, month };
      },
      onClickPrevMonth(){
        const oldDate = new Date(this.displayDate.year, this.displayDate.month);
        const newDate = dateHelper.addMonth(oldDate, -1);
        const [year, month] = dateHelper.getYearMonthDate(newDate);
        this.displayDate = { year, month };
      },
      onClickNextMonth(){
        const oldDate = new Date(this.displayDate.year, this.displayDate.month);
        const newDate = dateHelper.addMonth(oldDate, 1);
        const [year, month] = dateHelper.getYearMonthDate(newDate);
        this.displayDate = { year, month };
      },
      onClickNextYear(){
        const oldDate = new Date(this.displayDate.year, this.displayDate.month);
        const newDate = dateHelper.addYear(oldDate, 1);
        const [year, month] = dateHelper.getYearMonthDate(newDate);
        this.displayDate = { year, month };
      },
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
      font-size: 16px;
      &:hover {
        color: $white-color;
      }
    }

    /* content */
    &-content{
      margin: 0.8em;
      height: 224px;
      width: 224px;
    }
    &-weekDay,
    &-cell {
      width: 32px;
      height: 32px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      transition: all .3s;
      &.active {
        color: $grey-color;
        background-color: $primary-color;
      }
      &.disabled {
        cursor: not-allowed;
        color: darken(white, 60%);
      }
      &:not(.disabled):not(.active):hover {
        background-color: $grey-light-color;
      }
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
