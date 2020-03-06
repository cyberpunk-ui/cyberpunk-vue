<template>
  <div class="c-menu" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "CMenu",
    provide(){
      return {
        root: this,
        direction: this.direction
      }
    },
    props: {
      selected: {
        type: Array,
        default: () => []
      },
      multiple: {
        type: Boolean,
        default: false
      },
      direction: {
        type: String,
        default: 'horizontal',
        validator: (value) => {
          return ['horizontal', 'vertical'].indexOf(value) >= 0
        }
      },
    },
    data(){
      return {
        items: [],
        namePath: [],
        subMenuItems: [],
      }
    },
    computed: {
      classes() {
        return {
          vertical: this.direction === 'vertical'
        }
      }
    },
    mounted() {
      this.updateChildren()
      this.listenToChildren()
    },
    /* istanbul ignore next */
    updated() {
      this.updateChildren()
    },
    methods: {
      addItem(vm){
        this.items.push(vm)
      },
      addSubMenuItem(vm){
        this.subMenuItems.push(vm)
      },
      closeAllPopover(){
        this.subMenuItems.forEach(vm => {
          vm.close()
        })
      },
      updateChildren() {
        this.items.forEach(vm => {
          vm.active = this.selected.indexOf(vm.name) >= 0
        })
      },
      listenToChildren(){
        this.items.forEach(vm => {
          vm.$on('add:selected', name => {
            /* istanbul ignore next */
            if (this.multiple) {
              let copySelected = JSON.parse(JSON.stringify(this.selected))
              copySelected.push(name)
              this.$emit('update:selected', copySelected)
            } else {
              this.$emit('update:selected', [name])
            }
          })
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../style/var";

  .c-menu {
    color: #fff;
    display: flex;
    background-color: $grey-color;
    &.vertical {
      flex-direction: column;
    }
  }
</style>
