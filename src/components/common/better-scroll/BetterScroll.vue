<template>
    <div class="wrapper" ref="wrapper">
        <slot></slot>
    </div>
</template>

<script>

import BScroll from 'better-scroll'

export default {
    name: 'Bscroll',
    props: {
      /**
       * 1 滚动的时候会派发scroll事件，会截流。
       * 2 滚动的时候实时派发scroll事件，不会截流。
       * 3 除了实时派发scroll事件，在swipe的情况下仍然能实时派发scroll事件
       */
      probeType: {
        type: Number,
        default: 1
      },
      /**
       * 是否派发滚动事件
       */
      listenScroll: {
        type: Boolean,
        default: false
      },
      /**
       * 是否派发滚动到底部的事件，用于上拉加载
       */
      pullup: {
        type: Boolean,
        default: false
      },
    },
    mounted() {
      // 保证在DOM渲染完毕后初始化better-scroll
      setTimeout(() => {
        this._initScroll()
      }, 20)
    },
    methods: {
      _initScroll() {
        if (!this.$refs.wrapper) {
          return
        }
        // better-scroll的初始化
        this.scroll = new BScroll(this.$refs.wrapper, {
          probeType: this.probeType,
          click: true,
          scrollX: this.scrollX,
          pullUpLoad: this.pullUpLoad
        })

        // 是否派发滚动事件
        if (this.listenScroll) {
          this.scroll.on('scroll', (pos) => {
            this.$emit('scroll', pos)
          })
        }
        // 是否派发滚动到底部事件，用于上拉加载
        if (this.pullup) {
          this.scroll.on('scrollEnd', () => {
            // 滚动到底部
            if (this.scroll.y <= (this.scroll.maxScrollY + 50)) {
              this.$emit('scrollToEnd')
            }
          })
        }

       

        // 是否派发列表滚动开始的事件
        if (this.beforeScroll) {
          this.scroll.on('beforeScrollStart', () => {
            this.$emit('beforeScroll')
          })
        }
      },
    },
}
</script>

<style>

</style>