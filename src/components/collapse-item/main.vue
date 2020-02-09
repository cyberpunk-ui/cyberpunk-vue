<template>
  <div class="c-collapse-item">
    <div class="title" @click="open = !open">
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
    props:{
      title: {
        type: String,
        required: true,
      },
      name: {
        type: String | Number,
      },
    },
    data(){
      return {
        open: false,
      }
    },
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