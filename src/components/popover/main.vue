<template>
  <div class="c-popover" ref="popover">
    <div
      ref="contentWrapper"
      class="content-wrapper"
      v-if="visible"
      :class="{ [`position-${position}`]: true }"
    >
      <slot name="content" :close="close"></slot>
    </div>
    <span ref="triggerWrapper" class="trigger-wrapper">
      <slot></slot>
    </span>
  </div>
</template>

<script>
  export default {
    name: "CPopover",
    props: {
      position: {
        type: String,
        default: "top",
        validator(value) {
          return ["top", "bottom", "left", "right"].indexOf(value) >= 0;
        }
      },
      trigger: {
        type: String,
        default: "click",
        validator(value) {
          return ["click", "hover"].indexOf(value) >= 0;
        }
      }
    },
    data() {
      return {
        visible: false
      };
    },
    mounted() {
      if (this.trigger === "click") {
        this.$refs.popover.addEventListener("click", this.onClick);
      } else {
        this.$refs.popover.addEventListener("mouseenter", this.open);
        this.$refs.popover.addEventListener("mouseleave", this.close);
      }
    },
    beforeDestroy() {
      if (this.trigger === "click") {
        this.$refs.popover.removeEventListener("click", this.onClick);
      } else {
        this.$refs.popover.removeEventListener("mouseenter", this.open);
        this.$refs.popover.removeEventListener("mouseleave", this.close);
      }
    },
    methods: {
      positionContent() {
        const {contentWrapper, triggerWrapper} = this.$refs;
        document.body.appendChild(contentWrapper);
        const {
          width,
          height,
          top,
          left
        } = triggerWrapper.getBoundingClientRect();
        const {height: height2} = contentWrapper.getBoundingClientRect();
        let positions = {
          top: {top: top + window.scrollY, left: left + window.scrollX},
          bottom: {
            top: top + height + window.scrollY,
            left: left + window.scrollX
          },
          left: {
            top: top + window.scrollY + (height - height2) / 2,
            left: left + window.scrollX
          },
          right: {
            top: top + window.scrollY + (height - height2) / 2,
            left: left + window.scrollX + width
          }
        };
        contentWrapper.style.left = positions[this.position].left + "px";
        contentWrapper.style.top = positions[this.position].top + "px";
      },
      onClickDocument(e) {
        if (
          this.$refs.popover &&
          (this.$refs.popover === e.target ||
            this.$refs.popover.contains(e.target))
        ) {
          return;
        }
        if (
          this.$refs.contentWrapper &&
          (this.$refs.contentWrapper === e.target ||
            this.$refs.contentWrapper.contains(e.target))
        ) {
          return;
        }
        this.close();
      },
      open() {
        this.visible = true;
        this.$nextTick(() => {
          this.positionContent();
          document.addEventListener("click", this.onClickDocument);
        });
      },
      close() {
        this.visible = false;
        document.removeEventListener("click", this.onClickDocument);
      },
      onClick(event) {
        if (this.$refs.triggerWrapper.contains(event.target)) {
          if (this.visible === true) {
            this.close();
          } else {
            this.open();
          }
        }
      }
    }
  };
</script>

<style scoped lang="scss">
  @import "../../style/var";
  .c-popover {
    display: inline-block;
    vertical-align: top;
    position: relative;
  }

  .trigger-wrapper {
    display: inline-block;
  }

  .content-wrapper {
    position: absolute;
    border: 1px solid $popover-border-color;
    border-radius: $popover-border-radius;
    filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5));
    background: $grey-color;
    color: $white-color;
    padding: 0.5em 1em;
    max-width: 20em;
    word-break: break-all;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,0.8);

    &::before,
    &::after {
      content: "";
      display: block;
      border: $popover-space solid transparent;
      width: 0;
      height: 0;
      position: absolute;
    }

    &.position-top {
      transform: translateY(-100%);
      margin-top: -$popover-space;
      background-color: $grey-color;

      &::before,
      &::after {
        left: $popover-space;
      }

      &::before {
        border-top-color: black;
        border-bottom: none;
        top: 100%;
      }

      &::after {
        border-top-color: $popover-border-color;
        border-bottom: none;
        top: calc(100%);
      }
    }

    &.position-bottom {
      margin-top: $popover-space;

      &::before,
      &::after {
        left: $popover-space;
      }

      &::before {
        border-top: none;
        border-bottom-color: black;
        bottom: 100%;
      }

      &::after {
        border-top: none;
        border-bottom-color: $popover-border-color;
        bottom: calc(100%);
      }
    }

    &.position-left {
      transform: translateX(-100%);
      margin-left: -$popover-space;

      &::before,
      &::after {
        transform: translateY(-50%);
        top: 50%;
      }

      &::before {
        border-left-color: black;
        border-right: none;
        left: 100%;
      }

      &::after {
        border-left-color: $popover-border-color;
        border-right: none;
        left: calc(100%);
      }
    }

    &.position-right {
      margin-left: $popover-space;

      &::before,
      &::after {
        transform: translateY(-50%);
        top: 50%;
      }

      &::before {
        border-right-color: black;
        border-left: none;
        right: 100%;
      }

      &::after {
        border-right-color: $popover-border-color;
        border-left: none;
        right: calc(100%);
      }
    }
  }
</style>
