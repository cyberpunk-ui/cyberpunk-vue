<template>
  <div class="c-cascader-items">
    <div class="left">
      <div class="item" v-for="item in items" @click="leftSelected = item">
        {{item.name}}
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <c-cascader-items :items="rightItems"></c-cascader-items>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CCascaderItems",
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
    background-color: #fff;
    z-index: 9;
    position: relative;
    .left{
      width: 80px;

      .item {
        background-color: #fff;
        color: $black-color;
        padding: 0.5em 0.5em;
        border-bottom: 1px solid $grey-color;
        &:hover {
          background-color: $primary-dark-color;
        }
      }
    }
  }
</style>