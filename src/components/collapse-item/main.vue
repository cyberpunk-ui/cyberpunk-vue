<template>
  <div class="c-collapse-item">
    <div class="title" @click="toggle">
      {{title}}
      <span class="trigger">
        <c-icon type="arrow-down"></c-icon>
      </span>
    </div>
    <div class="content" v-if="open">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CCollapseItem",
    inject: ['eventBus'],
    props: {
      title: {
        type: String,
        required: true,
      },
    },
    data(){
      return {
        open: false,
      }
    },
    mounted () {
      this.eventBus && this.eventBus.$on('update:selected', (vm) => {
        if (vm !== this) {
          this.close();
        }
      })
    },
    methods: {
      toggle(){
        if (this.open) {
          this.open = false
        } else {
          this.open = true;
          this.eventBus && this.eventBus.$emit('update:selected', this)
        }
      },
      close(){
        this.open = false
      },
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../style/theme';

  .c-collapse-item {
    color: #fff;
    font-size: $base-font-size;
    > .title {
      position: relative;
      padding: 12px;
      line-height: 1.6em;
      background-color: $primary-color;
      color: $black-color;
      font-weight: bold;
      cursor: pointer;
      border-bottom: 1px solid $grey-color;
      .trigger {
        position: absolute;
        right: 12px;
        font-size: 18px;
      }
    }
    &:last-child > .title {
      border-bottom: none;
    }
    & .content {
      padding: 12px;
      background-color: $grey-color;
    }
  }
</style>