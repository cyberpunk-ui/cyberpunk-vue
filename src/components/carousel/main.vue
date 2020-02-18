<template>
  <div
    class="c-carousel"
    :style="styles"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <div class="c-carousel-wrapper">
      <slot></slot>
    </div>
    <div class="dots">
      <span
        v-for="n in childrenLength"
        :key="n"
        :class="{active: selectedIndex === n - 1}"
        @click="select(n-1)"
      >
        {{n}}
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CCarousel",
    props: {
      height: {
        type: [String, Number]
      },
      selected: {
        type: [String, Number]
      },
      autoplay: {
        type: Boolean,
        default: true
      },
      interval: {
        type: Number,
        default: 2000
      },
      reverseAutoplay: {
        type: Boolean,
        default: false
      },
    },
    data(){
      return {
        childrenLength: 0,
        lastSelectedIndex: undefined,
        timerId: undefined
      }
    },
    computed: {
      styles() {
        return {
          height: `${this.height}px`,
        }
      },
      names(){
        return this.$children.map(vm => vm.name)
      },
      selectedIndex(){
        return this.names.indexOf(this.selected) || 0
      }
    },
    mounted() {
      this.updateChildren();
      this.playAutomatically();
      this.childrenLength = this.$children.length
    },
    updated() {
      this.updateChildren()
    },
    methods: {
      onMouseEnter(){
        this.pauseAutomatically();
      },
      onMouseLeave(){
        this.playAutomatically();
      },
      getSelected(){
        const first = this.$children[0]
        return this.selected || first.name
      },
      select(index){
        this.lastSelectedIndex = this.selectedIndex
        this.$emit('update:selected', this.names[index])
      },
      playAutomatically(){
        if (!this.autoplay || this.timerId) { return }
        let run = () => {
          let index = this.names.indexOf(this.getSelected())
          let step = this.reverseAutoplay ? -1 : 1
          let newIndex = index + step
          if (newIndex === -1) { newIndex = this.names.length + step}
          if (newIndex === this.names.length) {newIndex = 0}
          this.select(newIndex)
          this.timerId = setTimeout(run, this.interval)
        }
        this.timerId = setTimeout(run, this.interval)
      },
      pauseAutomatically(){
        window.clearTimeout(this.timerId)
        this.timerId = undefined
      },
      updateChildren() {
        const selected = this.getSelected()
        this.$children.forEach(vm => {
          let reverse = this.selectedIndex <= this.lastSelectedIndex;
          if (this.timerId) {
            if (this.lastSelectedIndex === this.$children.length - 1 && this.selectedIndex === 0) {
              reverse = false
            }
            if (this.lastSelectedIndex === 0 && this.selectedIndex === this.$children.length - 1) {
              reverse = true
            }
          }
          vm.reverse = reverse
          this.$nextTick(()=> {
            vm.selected = selected
          })
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../style/var";

  .c-carousel {
    &-wrapper {
      overflow: hidden;
      position: relative;
    }
    & .dots > span{
      color: #fff;
      cursor: pointer;
      &.active {
        color: $secondary-color;
      }
    }
  }
</style>
