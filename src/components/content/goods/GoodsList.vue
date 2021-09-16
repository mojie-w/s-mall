<template>
  <div class="goods">
    <goods-list-item
      v-for="(item, index) in goods"
      :key="index"
      :goods-item="item"
    ></goods-list-item>

    <!-- 撑高最后一组,已可以看见价格 收藏 -->
    <!-- <div class="pullup"></div> -->
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem.vue'

export default {
  components: {
    GoodsListItem
  },
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style>
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 2px;
}

.pullup {
  width: 100%;
  height: 49px;
}
</style>
