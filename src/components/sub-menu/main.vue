<template>
  <div class="c-sub-menu" v-click-outside="close">
    <span class="c-sub-menu-title" @click="onTrigger" :class="{active}">
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
  import ClickOutside from "@/utils/click-outside"
  export default {
    name: "CSubMenu",
    inject: ['root'],
    components: {CIcon},
    directives: {ClickOutside},
    props: {
      name: {
        type: String,
        required: true,
      }
    },
    data(){
      return {
        popoverVisible: false
      }
    },
    created() {
      this.root.addSubMenuItem(this)
    },
    computed: {
      active() {
        return this.root.namePath.indexOf(this.name) >= 0
      }
    },
    methods:{
      close(){
        this.popoverVisible = false
      },
      onTrigger(){
        this.popoverVisible = !this.popoverVisible
      },
      updateNamePath() {
        this.root.namePath.unshift(this.name)
        if (this.$parent.updateNamePath){
          this.$parent.updateNamePath()
        }
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
        & .icon {
          transition: all 0.3s;
        }
        &.active .icon{
          transition: all 0.3s;
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
    & .c-sub-menu .c-sub-menu-title-icon .icon {
      transform: rotate(270deg);
      transition: all 0.3s;
    }
    & .c-sub-menu .c-sub-menu-title-icon.active .icon {
      transform: rotate(90deg);
    }
  }
</style>
