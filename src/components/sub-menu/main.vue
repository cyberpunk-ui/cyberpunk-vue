<template>
  <div class="c-sub-menu">
    <span class="c-sub-menu-title" @click="onTrigger">
      <slot name="title"></slot>
      <span
        class="c-sub-menu-title-icon"
        :class="{active: popoverVisible}"
      ><c-icon type="arrow-down"></c-icon></span>
    </span>
    <div class="c-sub-menu-popover" v-show="popoverVisible">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import CIcon from '../icon/icon';
  export default {
    name: "CSubMenu",
    inject: ['root'],
    components: {CIcon},
    data(){
      return {
        popoverVisible: false
      }
    },
    methods:{
      onTrigger(){
        this.popoverVisible = !this.popoverVisible
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../style/var";

  .c-sub-menu {
    position: relative;

    &-title {
      display: inline-block;
      vertical-align: top;
      padding: 12px 24px;
      cursor: pointer;
      transition: all 0.3s;

      &.active {
        color: $black-color;
        background-color: $primary-color;
        font-weight: $button-font-weight;
      }

      &:hover:not(.active) {
        background-color: $grey-light-color;
      }
      &-icon {
        margin-left: 0.7em;
        transition: all 0.3s;
        &.active {
          transform: rotate(180deg);
        }
      }
    }

    &-popover {
      z-index: 1;
      position: absolute;
      top: 100%;
      left: 0;
      white-space: nowrap;
      background-color: $grey-color;
      box-shadow: 0 4px 12px 0 rgba(black, 0.3);
    }
    & .c-sub-menu .c-sub-menu-popover {
      left: 100%;
      top: 0;
      margin-left: 4px;
    }
  }
</style>
