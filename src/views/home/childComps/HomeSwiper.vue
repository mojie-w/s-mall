<template>
  <swiper>
    <swiper-item v-for="(item, index) in banners" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt=""  @load="imgLoad"/>
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper, SwiperItem} from "components/common/swiper/index.js";

export default {
  name: "HomeSwiper",
  data () {
    return {
      isload: false  
    }
  },
  props: {
    banners: {
      type: Array,
      default() {
        return []
      },
    },
  },
  components: {
    Swiper,
    SwiperItem,
  },
  methods: {
    imgLoad() {
      if(!this.isload){
        this.$emit('swiperLoad')
        this.isload = true
      }
      
    }
  }
};
</script>

<style>
</style>
