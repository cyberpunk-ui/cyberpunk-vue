<template>
  <div class="c-cascader-items">
    <div class="left">
      <div
        class="item"
        v-for="item in items"
        @click="leftSelected = item"
      >
        {{item.name}}
        <span class="arrow" v-if="item.children">
          <c-icon type="arrow-right"></c-icon>
        </span>
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <c-cascader-items :items="rightItems"></c-cascader-items>
    </div>
  </div>
</template>

<script>
  import Icon from '../icon/icon';
  export default {
    name: "CCascaderItems",
    components: {'c-icon': Icon},
    props: {
      items: {
        type: Array,
      }
    },
    data(){
      return {
        leftSelected: null,
      }
    },
    computed: {
      rightItems(){
        if (this.leftSelected && this.leftSelected.children !== null) {
          return this.leftSelected.children;
        } else {
          return null;
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../style/var';

  .c-cascader-items {
    display: flex;
    color: white;
    z-index: 9;
    position: relative;
    background-color: $grey-color;
    height: 200px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
    overflow: hidden;
    .left{
      width: 120px;
      padding-top: 0.3em;
      .item {
        position: relative;
        font-size: 14px;
        color: $white-color;
        padding: 0.5em 0.8em;
        transition: all 0.2s;
        cursor: pointer;
        &:hover {
          background-color: $primary-color;
          color: $black-color;
        }
        .arrow {
          position: absolute;
          right: 6px;
        }
      }
    }
    .right {
      border-left: 1px solid $grey-light-color;
    }
  }
</style>