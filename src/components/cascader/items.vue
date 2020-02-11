<template>
  <div class="c-cascader-items">
    <div class="left">
      <div class="name" v-for="item in items" @click="leftSelected = item">
        {{item.name}}
      </div>
    </div>
    <div class="right" v-if="rightItems !== null">
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
    .left{
      width: 80px;
      .name {
        border: 1px solid red;
      }
    }
  }
</style>