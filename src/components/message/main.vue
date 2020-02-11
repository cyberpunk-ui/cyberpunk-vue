<template>
  <div class="c-message-wrapper" :class="messageClass">
    <div class="c-message">
      <template>
        <slot v-if="!enableHtml"></slot>
        <div v-else v-html="$slots.default[0]"></div>
      </template>
      <span class="close" @click="onCloseMessage">
        <span v-if="closeButton.text">{{ closeButton.text }}</span>
        <c-icon v-else type="close"></c-icon>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "CMessage",
  props: {
    position: {
      type: String,
      default: "top",
      validator(value) {
        return ["top", "bottom", "center"].indexOf(value) !== -1;
      }
    },
    autoClose: {
      type: [Boolean, Number],
      default: 3,
      validator(value) {
        return value === false || typeof value === "number";
      }
    },
    enableHtml: {
      type: Boolean,
      default: false
    },
    closeButton: {
      type: Object,
      default() {
        return {
          text: "关闭",
          callback: undefined
        };
      }
    }
  },
  mounted() {
    this.execAutoClose();
  },
  computed: {
    messageClass() {
      return [`position-${this.position}`];
    }
  },
  methods: {
    close() {
      this.$el.remove();
      this.$emit("close");
      this.$destroy();
    },
    onCloseMessage() {
      this.close();
      if (this.closeButton && typeof this.closeButton.callback === "function") {
        this.closeButton.callback(this);
      }
    },
    execAutoClose() {
      if (this.autoClose) {
        setTimeout(() => {
          this.close();
        }, this.autoClose * 1000);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../style/var";
@import "../../style/animation";

.c-message-wrapper {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  $animation-duration: 300ms;
  &.position-top {
    top: 0;
    .c-message {
      animation: slide-down $animation-duration;
    }
  }
  &.position-center {
    top: 50%;
    animation: fade-in 0.5s;
    transform: translateX(-50%) translateY(-50%);
  }
  &.position-bottom {
    bottom: 0;
    .c-message {
      animation: slide-up $animation-duration;
    }
  }
  .c-message {
    background-color: $grey-color;
    color: $white-color;

    border-bottom: 1px solid $secondary-color;
    padding: $message-padding;
    display: flex;
    .close {
      cursor: pointer;
      height: 100%;
      color: $secondary-color;
      margin: 0 -10px 0 12px;
    }
  }
}
</style>
