<template>
  <ul class="c-pagination" :class="{hide: hideOnSinglePage && total <= 1}">
    <li
      class="nav"
      :class="{disabled: this.current === 1}"
      @click="onPageChange(current - 1)"
    >
      <c-icon type="arrow-lift"></c-icon>
    </li>
    <li
      v-for="(page, index) in pages"
      :key="index"
      @click="isEllipsis(page) ? onClickEllipsis(page) : onPageChange(page)"
    >
      <span class="c-pagination-item active" v-if="page === current">{{page}}</span>
      <span class="c-pagination-item ellipsis" v-else-if="isEllipsis(page)">
        <c-icon type="ellipsis"></c-icon>
      </span>
      <span class="c-pagination-item" v-else>{{page}}</span>
    </li>
    <li
      class="nav"
      :class="{disabled: this.current === pageTotal}"
      @click="onPageChange(current + 1)"
    >
      <c-icon type="arrow-right"></c-icon>
    </li>
  </ul>
</template>

<script>
import CIcon from "@/components/icon/icon"
import { unique } from '@/utils/tools'

export default {
  name: "CPagination",
  components: { CIcon },
  props: {
    current: {
      type: Number,
      default: 1,
    },
    total: {
      type: Number,
      default: 1,
    },
    pageSize: {
      type: Number,
      default: 10,
    },
    hideOnSinglePage: {
      type: Boolean,
      default: false,
    },
    onchange: {
      type: Function,
    }
  },
  data(){
    return {
      pageTotal: 0,
      isRightHover: false,
    }
  },
  created() {
    this.calcPageTotal();
  },
  computed: {
    pages() {
      const pageItems = unique([1, this.current - 2, this.current - 1, this.current,
        this.current + 1, this.current + 2,  this.pageTotal])
      if (this.current === 1) {
        pageItems.push(this.current + 3)
        pageItems.push(this.current + 4)
      }else if (this.current === 2) {
        pageItems.push(this.current + 3)
      }
      if (this.current === this.pageTotal) {
        pageItems.push(this.current - 3)
        pageItems.push(this.current - 4)
      }else if (this.current === this.pageTotal - 1) {
        pageItems.push(this.current - 3)
      }
      return pageItems
        .filter((item) => item > 0 && item <= this.pageTotal)
        .sort((a,b) => a-b)
        .reduce((acc, current, index, items) => {
          items[index] - items[index - 1] > 1 && acc.push(index > items.length / 2 ? '+' : '-')
          acc.push(current)
          return acc
        }, [])
    }
  },
  methods: {
    calcPageTotal(){
      this.pageTotal = Math.floor(this.total / this.pageSize)
        + (this.total % this.pageSize > 0 ? 1 : 0);
    },
    onPageChange(item) {
      if (item >= 1 && item <= this.pageTotal) {
        this.$emit('update:current', item)
        this.$emit('onchange', item, this.pageSize)
      }
    },
    onClickEllipsis(item) {
      const { current, total } = this
      if (item === '+') {
        this.onPageChange(current === total - 4 ? total : current + 5)
      } else {
        this.onPageChange(current <= 5 ? 1 : current - 5)
      }
    },
    isEllipsis(page) {
      return page === '-' || page === '+'
    },
  }
};
</script>

<style lang="scss" scoped>
@import "../../style/var";

.c-pagination {
  display: flex;
  list-style: none;
  user-select: none;
  margin: 0 -4px;
  &.hide{
    display: none;
  }
  .nav, &-item {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    min-width: 30px;
    height: 30px;
    margin: 0 4px;
    padding: 0 0.5em;
    color: $white-color;
    background-color: $grey-color;
    cursor: pointer;
    transition: all .3s;
    &.active, &:hover:not(.disabled) {
      color: $black-color;
      background-color: $primary-color;
    }
    &.disabled {
      color: lighten($grey-color, 20%);
      cursor: not-allowed;
    }
  }
}
</style>
