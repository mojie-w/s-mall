<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="#f0f">
      <img slot="item-icon" src="~assets/img/tarbar/home.png" alt="" />
      <img slot="item-icon-active" src="~assets/img/tarbar/home-active.png" alt="" />
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category" activeColor="yellow">
      <img slot="item-icon" src="~assets/img/tarbar/category.png" alt="" />
      <img slot="item-icon-active" src="~assets/img/tarbar/category-active.png" alt="" />
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/shopcart" activeColor="deeppink">
      <img slot="item-icon" src="~assets/img/tarbar/shopcart.png" alt="" />
      <img slot="item-icon-active" src="~assets/img/tarbar/shopcart-active.png" alt="" />
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img slot="item-icon" src="~assets/img/tarbar/profile.png" alt="" />
      <img slot="item-icon-active" src="~assets/img/tarbar/profile-active.png" alt="" />
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
// import TabBar from "./tarbar/TabBar.vue";
// 使用别名  如果不是使用 import 引入路径, 需要在路径前加 ~
import TabBar from 'components/common/tarbar/TabBar.vue'
import TabBarItem from 'components/common/tarbar/TabBarItem.vue'

export default {
  components: {
    TabBar,
    TabBarItem,
  },
}
</script>

<style></style>
