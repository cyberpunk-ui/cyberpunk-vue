<template>
  <div class="c-carousel" :style="styles">
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
        default: 3000
      },
    },
    data(){
      return {
        childrenLength: 0,
        lastSelectedIndex: undefined
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
      getSelected(){
        const first = this.$children[0]
        return this.selected || first.name
      },
      select(index){
        this.lastSelectedIndex = this.selectedIndex
        this.$emit('update:selected', this.names[index])
      },
      playAutomatically(){
        if (this.autoplay) {
          let index = this.names.indexOf(this.getSelected())
          let run = () => {
            // if (index === names.length){ index = 0 }
            // this.$emit('update:selected', names[index + 1])
            // index ++
            let newIndex = index - 1
            if (newIndex === -1) { newIndex = this.names.length - 1}
            if (newIndex === this.names.length) {newIndex = 0}
            this.select(newIndex)
            setTimeout(run, this.interval)
          }
          setTimeout(run, this.interval)
        }
      },
      updateChildren() {
        const selected = this.getSelected()
        this.$children.forEach(vm => {
          vm.reverse = this.selectedIndex <= this.lastSelectedIndex
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
