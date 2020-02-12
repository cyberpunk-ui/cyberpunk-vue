<template>
  <div class="c-cascader-items">
    <div class="left">
      <div
        class="item"
        :class="{active: selected && selected[level] && selected[level].name === item.name}"
        v-for="(item,index) in items"
        :key="index"
        @click="onClickItem(item)"
      >
        {{ item.name }}
        <span class="arrow" v-if="rightArrowVisible(item)">
          <c-icon type="arrow-right"></c-icon>
        </span>
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <c-cascader-items
        :items="rightItems"
        :level="level + 1"
        :selected="selected"
        @update:selected="onUpdateSelected"
        :close="close"
      ></c-cascader-items>
    </div>
  </div>
</template>

<script>
import Icon from "../icon/icon";
export default {
  name: "CCascaderItems",
  components: { "c-icon": Icon },
  props: {
    items: {
      type: Array
    },
    selected: {
      type: Array,
      default: () => []
    },
    level: {
      type: Number,
      default: 0
    },
    loadData: {
      type: Function,
    },
    close: {
      type: Function,
    },
  },
  computed: {
    /* eslint-disable */
    rightItems () {
      if (this.selected[this.level]) {
        let selected = this.items.filter((item) => item.name === this.selected[this.level].name);
        if (selected && selected[0].children && selected[0].children.length > 0) {
          return selected[0].children
        }
      }
    },
  },
  methods: {
    onClickItem(item) {
      const copySelected = JSON.parse(JSON.stringify(this.selected));
      copySelected[this.level] = item;
      copySelected.splice(this.level + 1);
      this.$emit('update:selected', copySelected);
      const lastItem = copySelected && copySelected[copySelected.length - 1];
      if (lastItem && lastItem.isLeaf) {
        this.close();
      }
    },
    onUpdateSelected(newSelected){
      this.$emit('update:selected', newSelected);
    },
    rightArrowVisible(item){
      return this.loadData ? !item.isLeaf : item.children;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../style/var";

.c-cascader-items {
  display: flex;
  color: white;
  z-index: 9;
  position: relative;
  background-color: $grey-color;
  height: 200px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  overflow: hidden;
  .left {
    width: 120px;
    padding-top: 0.3em;
    overflow: auto;
    .item {
      position: relative;
      font-size: 14px;
      color: $white-color;
      padding: 0.5em 0.8em;
      transition: all 0.2s;
      cursor: pointer;
      &.active,
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
    overflow: auto;
    border-left: 1px solid $grey-light-color;
  }
}
</style>
