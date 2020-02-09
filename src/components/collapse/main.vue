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
      selected: {
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
      this.eventBus.$emit('update:selected', this.selected);
      this.eventBus.$on('update:selected', (name) => {
        this.$emit('update:selected', name)
      })
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../style/theme';

  .c-collapse {

  }
</style>