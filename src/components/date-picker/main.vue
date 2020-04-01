<template>
  <div class="c-data-picker">
    <c-popover position="bottom" @close="onClose" ref="popover">
      <template slot="content">
        <div :class="c('calendar')">
          <div :class="c('nav')">
            <span @click="onClickPrevYear" :class="c('icon')"><c-icon type="double-arrow-left"></c-icon></span>
            <span v-if="mode === 'day'" @click="onClickPrevMonth" :class="c('icon')"><c-icon type="arrow-lift"></c-icon></span>
            <span :class="c('yearAndMouth')">
              <span @click.stop="onClickYear">{{displayDate.year}}年 </span>
              <span @click.stop="onClickMonth" v-show="mode === 'day'">{{displayDate.month + 1}}月</span>
            </span>
            <span v-if="mode === 'day'" @click="onClickNextMonth"  :class="c('icon')"><c-icon type="arrow-right"></c-icon></span>
            <span @click="onClickNextYear" :class="c('icon')"><c-icon type="double-arro-right"></c-icon></span>
          </div>
          <div :class="c('content')">
            <div v-if="mode === 'year'">
              <div :class="c('row', 'maxRow')" v-for="row in 4" :key="row">
                <span
                  v-for="cell in 3"
                  :class="[c('cell', 'maxCell'), {
                    disabled: isDisabledYear(getVisibleYear(row, cell)),
                    active: isActiveYear(getVisibleYear(row, cell)),
                    today: isTodayYear(getVisibleYear(row, cell)),
                  }]"
                  :key="cell"
                  @click.stop="onSelectYear(getVisibleYear(row, cell).getFullYear())"
                >
                  {{ getVisibleYear(row, cell).getFullYear() }}
                </span>
              </div>
            </div>
            <div v-else-if="mode === 'month'" :class="c('months')">
              <div :class="c('row', 'maxRow')" v-for="row in 4" :key="row">
                <span
                  v-for="cell in 3"
                  :class="[c('cell', 'maxCell'), {
                    active: isActiveMonth(getVisibleMonth(row, cell)),
                    today: isTodayMonth(getVisibleMonth(row, cell)),
                  }]"
                  :key="cell"
                  @click.stop="onSelectMonth(getVisibleMonth(row, cell))"
                >
                  {{ getVisibleMonth(row, cell) + 1 }}月
                </span>
              </div>
            </div>
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
                    disabled: !isDisabledMouth(getVisibleDay(row, cell)),
                    active: isActiveDay(getVisibleDay(row, cell)),
                    today: isToday(getVisibleDay(row, cell)),
                  }]"
                  v-for="cell in 7"
                  :key="cell"
                  @click="onSelectedDay(getVisibleDay(row, cell))"
                >
                  {{ getVisibleDay(row, cell).getDate() }}
                </span>
              </div>
            </div>
          </div>
          <div :class="c('button')" v-if="showToday">
            <span @click="onSelectedToday" :class="c('link')">今天</span>
          </div>
        </div>
      </template>
      <div :class="c('input')">
        <c-input :value.sync="currentDate" :placeholder="placeholder"></c-input>
        <span @click.stop="onClickClear" v-if="value && allowClear" :class="c('clear')"><c-icon type="reeor"></c-icon></span>
      </div>
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
      },
      showToday: {
        type: Boolean,
        default: true
      },
      placeholder: {
        type: String,
        default: '请选择日期'
      },
      allowClear: {
        type: Boolean,
        default: true
      },
    },
    data() {
      const [year, month] = dateHelper.getYearMonthDate(this.value)
      return {
        mode: 'day', // day / month / year
        displayDate: {year, month},
        dateHelper,
        weekDays: ['一', '二', '三', '四', '五', '六', '日'],
        yearRange: [year-1, year+10],
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
      visibleYears(){
        let array = [];
        for (let i = this.yearRange[0]; i <= this.yearRange[1]; i++) {
          array.push(new Date(i, 0, 1));
        }
        return array;
      },
      currentDate(){
        if (!this.value) return '';
        const [year, month, day] = dateHelper.getYearMonthDate(this.value);
        return `${year}-${dateHelper.pad2(month + 1)}-${dateHelper.pad2(day)}`;
      }
    },
    methods: {
      c(...names) {
        return names.map(name => `c-data-picker-${name}`);
      },
      getVisibleDay(row, cell){
        return this.visibleDays[(row - 1) * 7 + cell - 1];
      },
      getVisibleMonth(row, cell){
        return (row - 1) * 3 + cell - 1;
      },
      getVisibleYear(row, cell){
        return this.visibleYears[(row - 1) * 3 + cell - 1];
      },
      onClickYear(){
        this.mode = 'year'
      },
      onClickMonth(){
        this.mode = 'month'
      },
      onClickClear(){
        this.$emit('update:value', undefined)
      },
      onClickPrevYear(){
        if (this.mode === 'year') {
          return this.yearRange = this.yearRange.map(item => item - 10)
        }
        const oldDate = new Date(this.displayDate.year, this.displayDate.month);
        const newDate = dateHelper.addYear(oldDate, -1);
        const [year, month] = dateHelper.getYearMonthDate(newDate);
        this.displayDate = { year, month };
      },
      onClickNextYear(){
        if (this.mode === 'year') {
          return this.yearRange = this.yearRange.map(item => item + 10)
        }
        const oldDate = new Date(this.displayDate.year, this.displayDate.month);
        const newDate = dateHelper.addYear(oldDate, 1);
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
      onClose(){
        this.mode = 'day'
      },
      onSelectedToday(){
        const [year, month] = dateHelper.getYearMonthDate(new Date())
        this.mode = 'day'
        this.displayDate = {year, month}
        this.$emit('update:value', new Date())
      },
      onSelectedDay(date){
        this.$refs.popover.visible = false
        this.$emit('update:value', date)
      },
      onSelectMonth(month){
        this.mode = 'day'
        const date = new Date(this.displayDate.year, month);
        const [year, month2] = dateHelper.getYearMonthDate(date)
        this.displayDate = {year, month: month2}
      },
      onSelectYear(year){
        this.mode = 'day'
        const date = new Date(year, this.displayDate.month);
        const [_, month] = dateHelper.getYearMonthDate(date)
        this.displayDate = {year, month}
      },
      isDisabledYear(date){
        const [ year ] = dateHelper.getYearMonthDate(date)
        const [fistYear, lastYear] = this.yearRange
         // true 灰色 false 白色
        return year === fistYear || year === lastYear
      },
      isActiveYear(date){
        if (!this.value) return false;
        const [year1] = dateHelper.getYearMonthDate(date)
        const [year2] = dateHelper.getYearMonthDate(this.value)
        return year1 === year2
      },
      isTodayYear(date){
        const [year1] = dateHelper.getYearMonthDate(date)
        const [year2] = dateHelper.getYearMonthDate(new Date())
        return year1 === year2
      },
      isDisabledMouth(date){
        const [year, month] = dateHelper.getYearMonthDate(date)
        return year === this.displayDate.year && month === this.displayDate.month
      },
      isActiveDay(date){
        if (!this.value) return false;
        const [year1, month1, day1] = dateHelper.getYearMonthDate(date)
        const [year2, month2, day2] = dateHelper.getYearMonthDate(this.value)
        return year1 === year2 && month1 === month2 && day1 === day2
      },
      isToday(date){
        const [year1, month1, day1] = dateHelper.getYearMonthDate(date)
        const [year2, month2, day2] = dateHelper.getYearMonthDate(new Date())
        return year1 === year2 && month1 === month2 && day1 === day2
      },
      isActiveMonth(month){
        if (!this.value) return false;
        return this.displayDate.month === month
      },
      isTodayMonth(month){
        const [year, month2] = dateHelper.getYearMonthDate(new Date())
        return this.displayDate.year === year && month === month2
      },
    },
  };
</script>

<style lang="scss" scoped>
  @import "../../style/var";

  .c-data-picker {
    /* input */
    &-input {
      position: relative;
    }
    &-clear {
      position: absolute;
      right: 8px;
      top: 50%;
      transform: translateY(-50%);
      color: $grey-light-color;
      border-radius: 50%;
      cursor: pointer;
    }

    /* calendar */
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
      transition: color .3s;
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
      transition: color .3s;
      box-sizing: border-box;
      &.active {
        color: $grey-color;
        background-color: $primary-color;
      }
      &.disabled {
        color: darken(white, 60%);
      }
      &.today {
        border: 1px solid $primary-color;
      }
      &:not(.disabled):not(.active):hover {
        background-color: $grey-light-color;
      }
    }

    &-yearAndMouth {
      span {
        transition: color .3s;
        cursor: pointer;
        &:hover {
          color: $primary-color;
        }
      }
    }

    &-maxRow {
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
    &-maxCell {
      width: 100%;
      margin: 11px 0;
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
      transition: color .3s;
    }
    &-link:hover {
      color: $primary-color;
      cursor: pointer;
    }
  }
</style>
