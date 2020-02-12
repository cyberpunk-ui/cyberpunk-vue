<template>
  <div class="c-cascader" v-click-outside="close">
    <div class="trigger" @click="onToggle">
      <span v-if="result" class="result">{{result}}</span>
      <span v-else class="placeholder">请选择</span>
      <span class="arrow" :class="{active: visible}">
        <c-icon type="arrow-down"></c-icon>
      </span>
    </div>
    <div class="popover" v-if="visible">
      <cascader-items
        :items="source"
        :loadData="loadData"
        :selected="selected" @update:selected="onUpdateSelected"
        :close="close"
      ></cascader-items>
    </div>
  </div>
</template>

<script>
import cascaderItems from "./items";
import ClickOutside from '../../utils/click-outside'
import Icon from "../icon/icon";

export default {
  name: "CCascader",
  directives: {ClickOutside},
  components: {
    "cascader-items": cascaderItems,
    "c-icon": Icon,
  },
  props: {
    source: {
      type: Array
    },
    selected: {
      type: Array,
      default: () => []
    },
    loadData: {
      type: Function,
    }
  },
  data() {
    return {
      visible: false
    };
  },
  methods: {
    open(){
      this.visible = true
    },
    close(){
      this.visible = false
    },
    onToggle(){
      if (this.visible) {
        this.close()
      }else {
        this.open()
      }
    },
    onUpdateSelected(newSelected){
      this.$emit('update:selected', newSelected);
      let lastItem = newSelected[newSelected.length - 1]
      let simplest = (children, id) => {
        return children.filter(item => item.id === id)[0]
      };
      let complex = (children, id) => {
        let noChildren = []
        let hasChildren = []
        children.forEach(item => {
          if (item.children) {
            hasChildren.push(item)
          } else {
            noChildren.push(item)
          }
        })
        let found = simplest(noChildren, id)
        if (found) {
          return found
        } else {
          found = simplest(hasChildren, id)
          if (found) { return found }
          else {
            for (let i = 0; i < hasChildren.length; i++) {
              found = complex(hasChildren[i].children, id)
              if (found) {
                return found
              }
            }
            return undefined
          }
        }
      };
      let updateSource = (result) => {
        // this.loadingItem = {}
        let copy = JSON.parse(JSON.stringify(this.source))
        let toUpdate = complex(copy, lastItem.id)
        toUpdate.children = result
        this.$emit('update:source', copy)
      };
      if (!lastItem.isLeaf && this.loadData) {
        this.loadData(lastItem, updateSource)
      }
    }
  },
  computed: {
    result(){
      return this.selected.map(item => item.name).join('/')
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../style/var";

.c-cascader {
  display: inline-block;
  position: relative;
  .trigger {
    position: relative;
    display: inline-block;
    color: $black-color;
    padding: $button-padding;
    font-size: $base-font-size;
    font-weight: $button-font-weight;
    background-color: $primary-color;
    letter-spacing: $button-text-space;
    vertical-align: middle;
    min-width: 160px;
    cursor: pointer;
    .result {
      display: inline-block;
      width: 115px;
      overflow: hidden;
      vertical-align: middle;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .placeholder {
      color: $primary-dark-color;
    }
    .arrow {
      position: absolute;
      right: 12px;
      background-color: $primary-color;
      transition: all 0.3s;
      &.active{
        transform: rotate(180deg);
      }
    }
  }
  .popover {
    position: absolute;
    top: 100%;
    left: 0;
  }
}
</style>
