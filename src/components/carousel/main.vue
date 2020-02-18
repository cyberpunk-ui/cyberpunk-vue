<template>
  <div
    class="c-carousel"
    :style="styles"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
  >
    <div class="c-carousel-wrapper">
      <slot></slot>
    </div>
    <div class="c-carousel-dots">
      <span
        v-for="n in childrenLength"
        :key="n"
        :class="{active: selectedIndex === n - 1}"
        @click="select(n-1)"
      ></span>
    </div>
    <div class="c-carousel-action">
      <span class="button" @click="select(selectedIndex - 1)"><c-icon type="arrow-lift"></c-icon></span>
      <span class="button" @click="select(selectedIndex + 1)"><c-icon type="arrow-right"></c-icon></span>
    </div>
  </div>
</template>

<script>
  import CIcon from '../icon/icon'
  export default {
    name: "CCarousel",
    components:{ CIcon },
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
        timerId: undefined,
        startTouch: null,
      }
    },
    computed: {
      styles() {
        return {
          height: `${this.height}px`,
        }
      },
      names(){
        return this.items.map(vm => vm.name)
      },
      selectedIndex(){
        return this.names.indexOf(this.selected) || 0
      },
      items(){
        return this.$children.filter(vm => vm.$options.name ==='CCarouselItem')
      },
    },
    mounted() {
      this.updateChildren();
      this.playAutomatically();
      this.childrenLength = this.items.length
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
      onTouchStart(e){
        this.pauseAutomatically();
        if (e.touches.length > 1) { return }
        this.startTouch = e.touches[0];
      },
      onTouchEnd(e){
        let endTouch = e.changedTouches[0]
        let {clientX: x1, clientY: y1} = this.startTouch
        let {clientX: x2, clientY: y2} = endTouch
        let distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
        let deltaY = Math.abs(y2 - y1)
        let rate = distance / deltaY
        if (rate > 2) {
          if (x2 > x1) {
            this.select(this.selectedIndex - 1)
          } else {
            this.select(this.selectedIndex + 1)
          }
        }
        this.$nextTick(() => {
          this.playAutomatically()
        })
      },
      getSelected(){
        const first = this.$children[0]
        return this.selected || first.name
      },
      select(newIndex){
        this.lastSelectedIndex = this.selectedIndex
        if (newIndex === -1) { newIndex = this.names.length - 1}
        if (newIndex === this.names.length) {newIndex = 0}
        this.$emit('update:selected', this.names[newIndex])
      },
      playAutomatically(){
        if (!this.autoplay || this.timerId) { return }
        let run = () => {
          let index = this.names.indexOf(this.getSelected())
          let step = this.reverseAutoplay ? -1 : 1
          let newIndex = index + step
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
        this.items.forEach(vm => {
          let reverse = this.selectedIndex <= this.lastSelectedIndex;
          if (this.timerId || this.startTouch) {
            if (this.lastSelectedIndex === this.items.length - 1 && this.selectedIndex === 0) {
              reverse = false
            }
            if (this.lastSelectedIndex === 0 && this.selectedIndex === this.items.length - 1) {
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
    position: relative;
    &-wrapper {
      overflow: hidden;
      position: relative;
    }
    &-dots {
      position: absolute;
      bottom: 12px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      > span{
        display: inline-block;
        width: 40px;
        height: 4px;
        margin: 0 4px;
        border-radius: 4px;
        background-color: #fff;
        cursor: pointer;
        transition: all 0.6s;
        &.active {
          box-shadow: 0 0 4px $secondary-color;
          background-color: $secondary-color;
        }
      }
    }
    &-action {
      position: absolute;
      top: 50%;
      left: 0;
      width: 100%;
      transform: translateY(-50%);
      display: flex;
      justify-content: space-between;
      padding: 0 16px;
      .button {
        display: inline-block;
        width: 44px;
        line-height: 44px;
        font-size: 30px;
        text-align: center;
        border-radius: 50%;
        color: rgba(255,255,255,.3);
        background-color: rgba(0,0,0,0);
        transition: all .3s;
        cursor: pointer;
        user-select: none;
        &:hover {
          color: rgba(255,255,255,.8);
          background-color: rgba(0,0,0,.1);
        }
      }
    }
  }
</style>
