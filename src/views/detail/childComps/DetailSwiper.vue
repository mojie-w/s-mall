<template>
  <div>
    <swiper class="detail-swiper">
      <swiper-item v-for="(item, index) in topImages" :key="index">
        <img :src="item" alt=""/>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper/index.js";

export default {
  name: "DetailSwiper",
  components: {
    Swiper,
    SwiperItem,
  },
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      },
    },
    goods: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.detail-swiper {
  height: 300px;
  /* width: 200px; */
  text-align: center;
  overflow: hidden;
}

.detail-swiper img {
  /* height: 200px; */
  /* width: 200px; */

  width: 100%;
  /* overflow: hidden; */
}
</style>
