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
    mounted() {
      if(this.$children.length === 0) {
        console && console.warn &&
        console.warn('c-tabs component should contain c-tabs-head & c-tabs-body, Please complete.')
      }

      this.$children.forEach((vm)=>{
        if (vm.$options.name === 'CTabsHead') {
          vm.$children.forEach((childVm) => {
            if (childVm.$options.name === 'CTabsItem' && childVm.name === this.activeName) {
              this.eventBus.$emit('update:selected', this.activeName, childVm)
            }
          })
        }
      })
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../style/theme';

  .c-tabs {

  }
</style>