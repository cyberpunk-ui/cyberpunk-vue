<template>
  <header class="c-collapse">
    <slot></slot>
  </header>
</template>

<script>
  import Vue from 'vue';
  export default {
    name: "CCollapse",
    props: {
      accordion: {
        type: Boolean,
        default: false,
      },
      value: {
        type: String,
      }
    },
    data(){
      return {
        eventBus: new Vue(),
      }
    },
    provide(){
      if (this.accordion) {
        return {
          eventBus: this.eventBus
        }
      }
    },
    mounted() {
      this.eventBus.$emit('update:selected', this.value)
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../style/theme';

  .c-collapse {

  }
</style>