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
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      scrollY: true,
      click: true,
      mouseWheel: {
        speed: 20,
        invert: false,
        easeTime: 300,
      },
    });
  },
  methods: {
    scrollTo(x, y, time = 300) {
      // this.scroll 是BScroll对象
      this.scroll.scrollTo(x, y, time);
    },
  },
};
</script>

<style  scoped>
</style>>