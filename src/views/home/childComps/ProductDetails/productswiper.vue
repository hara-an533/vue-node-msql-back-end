<template>
  <div>
    <div class="details-top">
      <swiper class="home-swiper ouysyyu" ref="mySwiper" :options="swiperOptions ">
        <swiper-slide v-for="(item,index) in photos" :key="index">
          <img :src="item.url" alt />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
export default {
  name: "prozujian",
  components: {
    Swiper,
    SwiperSlide
  },
  props: ["pid"],
  directives: {
    swiper: directive
  },
  name: "carrousel",
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
          clickable: true, // 允许点击小圆点跳转
          autoplay: true // 自动切换
        },
        // Some Swiper option/callback...
        loop: true, // 循环
        autoplay: {
          delay: 3000,
          disableOnInteraction: false // 手动切换之后继续自动轮播
        }
      },
      photos: []
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    }
  },
  created() {
    let pid = this.pid;
    console.log(pid);
    if (pid) {
      this.axios
        .get("api/getProductDetial", { params: { pid } })
        .then(response => {
          this.photos = response.data.imgs;
          console.log(this.photos);
        });
    }
  },
  mounted() {
    console.log("Current Swiper instance object", this.swiper);
    this.swiper.slideTo(1, 1000, false);
  }
};
</script>

<style scoped>
.ouysyyu {
  width: 100%;
  height: 375px;
}

.ouysyyu img {
  width: 100%;
  height: 100%;
}
</style>