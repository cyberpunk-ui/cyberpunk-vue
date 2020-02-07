<template>
  <div class="c-tabs-pane" :class="{active}">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "CTabsPane",
    data() {
      return {
        active: false,
      }
    },
    props: {
      name: {
        type: String,
        required: true,
      }
    },
    inject: ['eventBus'],
    created() {
      this.eventBus.$on('update:selected', (name) => {
        this.active = name === this.name
      })
    },
  }
</script>

<style lang="scss" scoped>
  @import '../../style/theme';

  .c-tabs-pane {
    display: none;
    &.active{
      display: block;
    }
  }
</style>