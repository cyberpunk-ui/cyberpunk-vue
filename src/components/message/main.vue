<template>
  <div class="c-message-wrapper" :class="messageClass">
    <div class="c-message">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CMessage",
    props: {
      position: {
        type: String,
        validator(value) {
          return ['top', 'bottom', 'center'].indexOf(value) !== -1;
        }
      },
    },
    computed: {
      messageClass() {
        return [`position-${this.position}`]
      }
    },
    methods: {
      close () {
        this.$el.remove();
        this.$emit('close');
        this.$destroy();
      },
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../style/theme';
  @import '../../style/animation';

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
      color: $secondary-color;
      border-bottom: 1px solid $secondary-color;
      padding: $message-padding;
    }
  }

</style>