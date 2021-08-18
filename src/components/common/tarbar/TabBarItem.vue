<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :class="{ active: isActive }" :style="activeStyle"><slot name="item-text"></slot></div>
    <!-- <img src="../../assets/img/tarbar/home.png" alt="" />
    <div>首页</div> -->
  </div>
</template>

<script>
export default {
  props: {
    //子组件访问父组件传的数据
    path: String,
    activeColor: {
      type: String,
      default: '#F00' //红色
    }
  },
  data() {
    return {
      // isActive: true
    };
  },
  computed: {
    isActive() {
      /*  a.indexOf(b)  从a字符串 中找b字符串  返回第一次出现的(位置)索引值  ,没有找到返回 -1*/
      // home -> item(/home)  = true
      // home -> item(/category)  = false
      // home -> item(/shopcart)  = false
      // home -> item(/profile)  = false
      /*   console.log('this')
      console.log(this)
      console.log('this.route')
      console.log(this.$route) */
      // console.log(this.$route.path.indexOf(this.path));
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path).catch((err) => {});
    },
  },
};
</script>

<style>
.tab-bar-item {
  /* 均等分 */
  flex: 1;
  /* 内容居中 */
  text-align: center;
  /* 高度一般都是49px */
  height: 49px;
  font-size: 14px;
}
.tab-bar-item img {
  height: 24px;
  width: 24px;
  margin-top: 3px;
  /* 去除图片下面默认留的3px */
  vertical-align: middle;
  margin-bottom: 2px;
}
/* .active {
  color:#f00;
} */
</style>