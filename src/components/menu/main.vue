<template>
  <div class="c-menu">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "CMenu",
    provide(){
      return {
        root: this
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
    },
    data(){
      return {
        items: [],
        namePath: [],
        subMenuItems: [],
      }
    },
    mounted() {
      this.updateChildren()
      this.listenToChildren()
    },
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
  }
</style>
