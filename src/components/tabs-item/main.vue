<template>
  <div class="c-tabs-item" @click="xxx">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "CTabsItem",
    inject: ['eventBus'],
    props: {
      disabled: {
        type: Boolean,
        default: false,
      },
      name: {
        type: String,
        required: true,
      }
    },
    created() {
      this.eventBus.$on('update:selected', (name) => {
        console.log('item',name)
      })
    },
    methods: {
      xxx(){
        this.eventBus.$emit('update:selected', this.name)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../style/theme';

  .c-tabs-item {

  }
</style>