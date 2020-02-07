<template>
  <div class="c-tabs">
    <slot></slot>
  </div>
</template>

<script>
  import Vue from 'vue';
  export default {
    name: "CTabs",
    props: {
      activeName: {
        type: String,
        required: true,
      },
      direction: {
        type: String,
        default: 'horizontal',
        validator(value) {
          return ['horizontal', 'vertical'].indexOf(value) >= 0
        }
      }
    },
    data(){
      return {
        eventBus: new Vue()
      }
    },
    provide() {
      return {
        eventBus: this.eventBus
      }
    },
    created(){
      this.$emit('update:selected', '这是this')
    },
    mounted() {
      this.eventBus.$emit('update:selected', this.activeName)
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../style/theme';

  .c-tabs {

  }
</style>