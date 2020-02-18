<template>
  <div class="c-menu">
    <slot></slot>
  </div>
</template>

<script>
  import items from "@/components/cascader/items"

  export default {
    name: "CMenu",
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
    computed: {
      items() {
        return this.$children.filter(vm => vm.$options.name === 'CMenuItem')
      },
    },
    mounted() {
      this.updateChildren()
      this.listenToChildren()
    },
    updated() {
      this.updateChildren()
    },
    methods: {
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
