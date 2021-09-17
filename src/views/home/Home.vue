<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control
      :titles="['流行', '精选', '新款']"
      @tabClick="tabClick"
      ref="tabControl1"
      class="tab-control"
      v-show="isTabFixed"
    ></tab-control>
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <home-swiper :banners="banners" @swiperLoad="swiperLoad" />
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control
        :titles="['流行', '精选', '新款']"
        @tabClick="tabClick"
        ref="tabControl2"
      ></tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>

    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import TabControl from 'components/content/tabControl/TabControl.vue'
import GoodsList from 'components/content/goods/GoodsList.vue'

import HomeSwiper from './childComps/HomeSwiper.vue'
import RecommendView from './childComps/RecommendView.vue'
import FeatureView from './childComps/FeatureView.vue'
import Scroll from 'components/common/scroll/Scroll.vue'
import BackTop from 'components/content/backTop/BackTop.vue'

import { getHomeMultidata, getHomeGoods } from 'network/home'
import { debounce } from 'common/tools'

export default {
  name: 'Home',
  components: {
    NavBar,
    TabControl,
    GoodsList,
    HomeSwiper,
    RecommendView,
    FeatureView,
    Scroll,
    BackTop,
  },
  data() {
    return {
      banners: [],
      /*   dKeywords: [],
      keywords: [], */
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: 'pop',
      isShowBackTop: false,
      tabOffsetTop: 0,
      isTabFixed: false,
      saveY: 0,
      positionY: 0,
    }
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list
    },
  },
  created() {
    // 1.请求多个数据
    this.getHomeMultidata()
    // 2.请求商品数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  mounted() {
    // 1.监听图片加载完成
    const refresh = debounce(this.$refs.scroll.refresh, 100)
    this.$bus.$on('itemImageLoad', () => {
      // console.log("-------------");
      // created拿this.$ref 很可能拿不到
      this.$refs.scroll && refresh()
    })
  },
  destroyed() {
    console.log('home 销毁')
  },
  activated() {
    // 刷新重新计算高度,否则高度经常计算出错
    this.$refs.scroll.refresh()
    this.$refs.scroll.scrollTo(0, this.saveY, 0)
    // this.$refs.scroll.refresh()
  },
  deactivated() {
    console.log('home 不活跃')
    this.saveY = this.$refs.scroll.getScrollY()
  },
  methods: {
    // 事件监听相关
    // 防抖函数
    /*   debounce(func,delay) {
      let timer = null

      return function (...args) {
        if(timer) clearTimeout(timer)

        timer = setTimeout(() => {
          func.apply(this,args)
        },delay)
      }
    }, */
    // 请求精选, 流行, 等数据
    tabClick(index) {
      // console.log(index);
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
      // console.log(this.currentType);
      this.$refs.tabControl1.currentIndex = index
      this.$refs.tabControl2.currentIndex = index
      // console.log(this.tabOffsetTop);
      // console.log("positionY" + this.positionY);
      if (this.positionY >= this.tabOffsetTop) {
        this.$refs.scroll.scrollTo(0, -this.tabOffsetTop, 0)
      }
    },
    // 回到顶部
    backClick() {
      // 监听组件时必须是@click.native="backClick"
      // $refs取的scroll 是给Scroll组件了 ref='scroll'
      // 调用Scroll组件(this.$refs.scroll)的scrollTo()方法
      this.$refs.scroll.scrollTo(0, 0)
    },
    // 显示回到顶部按钮
    contentScroll(position) {
      // 1.判断backTop是否显示
      // console.log(position)
      this.isShowBackTop = -position.y > 1000
      // 2.决定tabControl是否吸顶
      this.isTabFixed = -position.y > this.tabOffsetTop
      this.positionY = -position.y
    },
    // 上拉加载更多
    loadMore() {
      console.log('上拉加载')
      this.getHomeGoods(this.currentType)
    },
    swiperLoad() {
      // 2.获取tabContentTop的offsetTop
      // 所有组件都有一个属性$el,用来获取组件中的元素
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
    },
    //* ***  网络请求相关
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        // console.log(res);
        this.banners = res.data.banner.list
        /* this.dKeywords = res.data.dKeyword.list
      this.keywords = res.data.keywords.list */
        this.recommends = res.data.recommend.list
        // console.log(this.recommends);
      })
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res => {
        // console.log(res);
        // 将这30条数据解构出来在push进list
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1

        this.$refs.scroll.finishPullUp()
      })
    },
  },
}
</script>

<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: white;
  /*  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 8; */
}

#home {
  /* padding-top: 44px; */
  /* 视口高度 */
  height: 100vh;
  position: relative;
}

/* .tab-control {
  position: sticky;
  top: 44px;
  background-color: #fff;
  z-index: 10;
} */

.content {
  /* height: 300px; */
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}

.tab-control {
  position: relative;
  z-index: 12;
  background-color: #fff;
}
</style>
