<template>
  <div class="c-sub-menu" v-click-outside="close" :data-name="name">
    <span class="c-sub-menu-title" @click="onTrigger" :class="{active, ...classes}">
      <slot name="title"></slot>
      <span
        class="c-sub-menu-title-icon"
        :class="{active: popoverVisible}"
      ><c-icon type="arrow-down"></c-icon></span>
    </span>
    <template v-if="this.direction === 'vertical'">
      <transition
        name="popover"
        @enter="enter"
        @after-enter="afterEnter"
        @leave="leave"
        @after-leave="afterLeave"
      >
        <div class="c-sub-menu-popover" :class="classes" v-show="popoverVisible">
          <slot></slot>
        </div>
      </transition>
    </template>
    <template v-else>
      <transition name="popover2">
        <div class="c-sub-menu-popover" v-show="popoverVisible">
          <slot></slot>
        </div>
      </transition>
    </template>
  </div>
</template>

<script>
  import CIcon from '../icon/icon';
  import ClickOutside from "../../utils/click-outside"
  export default {
    name: "CSubMenu",
    inject: ['root', 'direction'],
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
      },
      classes() {
        return {
          vertical: this.direction === 'vertical'
        }
      },

    },
    methods:{
      close(){
        if (this.direction === 'vertical') { return }
        this.popoverVisible = false
      },
      onTrigger(){
        this.popoverVisible = !this.popoverVisible
      },
      /* istanbul ignore next */
      updateNamePath() {
        this.root.namePath.unshift(this.name)
        if (this.$parent.updateNamePath){
          this.$parent.updateNamePath()
        }
      },
      /* istanbul ignore next */
      enter(el, done){
        const { height } = el.getBoundingClientRect()
        el.style.height = 0
        el.getBoundingClientRect()
        el.style.height = `${height}px`
        el.addEventListener('transitionend', done)
      },
      /* istanbul ignore next */
      afterEnter(el){
        el.style.height = 'auto'
      },
      /* istanbul ignore next */
      leave(el, done){
        const { height } = el.getBoundingClientRect()
        el.style.height = `${height}px`
        el.getBoundingClientRect()
        el.style.height = 0
        el.addEventListener('transitionend', done)
      },
      /* istanbul ignore next */
      afterLeave(el){
        el.style.height = 'auto'
      },
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
      padding: 12px 48px 12px 24px;
      cursor: pointer;
      transition: all 0.3s;
      &.active {
        color: $primary-color;
        font-weight: $button-font-weight;
      }

      &:hover:not(.active) {
        background-color: $grey-light-color;
      }
      &-icon {
        position: absolute;
        right: 16px;
        & .icon {
          transition: all 0.3s;
        }
        &.active .icon{
          transition: all 0.3s;
          transform: rotate(180deg);
        }
      }

      &.vertical {
        width: 100%;
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
      &.vertical {
        position: static;
        background-color: lighten($grey-color, 8%);
        width: 100%;
        box-shadow: inset 0 0px 12px 0 rgba(black, 0.4);
        overflow: hidden;
      }
    }

    & .c-sub-menu .c-sub-menu-popover {
      left: 100%;
      top: 0;
      margin-left: 4px;
    }
    & .c-sub-menu .c-sub-menu-popover.vertical {
      margin-left: 0;
    }

    & .c-sub-menu .c-sub-menu-title-icon .icon {
      transform: rotate(270deg);
    }
    & .c-sub-menu .c-sub-menu-title-icon.active .icon {
      transform: rotate(90deg);
    }

    & .c-sub-menu .vertical .icon {
      transform: rotate(0deg);
    }
    & .c-sub-menu .vertical .active .icon {
      transform: rotate(180deg);
    }

    .popover2-enter-active, .popover2-leave-active,
    .popover-enter-active, .popover-leave-active {
      transition: all .3s;
      transform: translateZ(0);
    }
    .popover2-enter, .popover2-leave-to{
      opacity: 0;
    }
  }
</style>
