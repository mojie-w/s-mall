<template>
  <!-- ref 如果是绑定在组件中的,那么通过this.$.refname 取到的是一个组件对象-->
  <!-- ref 如果是绑定在元素中的,那么通过this.$.refname 取到的是一个元素对象-->
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    //1.创建BScroll对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      scrollY: true,
      click: true,
      // mouseWheel: { //probeType为3 的时候,可以监听滚动的坐标但是使用滚轮不受probeType的影响,它总是滚动的
      //   speed: 20,
      //   invert: false,
      //   easeTime: 300,
      // },
      //滚动位置
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
    });
    //2.监听滚动的位置
    this.scroll.on("scroll", (position) => {
      // console.log(position)
      //自定义一个事件,将position发出
      this.$emit("scroll", position);
    });
    // 3.监听上拉事件
    if (this.pullUpLoad) {
      this.scroll.on("pullingUp", () => {
        // console.log('上拉加载更多')
        this.$emit("pullingUp");
      });
    }
  },
  methods: {
    scrollTo(x, y, time = 300) {
      // this.scroll 是BScroll对象
      // 先去判断this.scroll和this.scroll.scrollTo是否有值,有值再去调用this.scroll.scrollTo(x, y, time);
      // 以防后面调用时,this.scroll还没创建出来报错
      this.scroll && this.scroll.scrollTo && this.scroll.scrollTo(x, y, time);
      // this.scroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      this.scroll && this.scroll.scrollTo && this.scroll.finishPullUp();
    },
    refresh() {
      console.log("-------------");
      this.scroll && this.scroll.scrollTo && this.scroll.refresh();
    },
  },
};
</script>

<style scoped>
</style>>
