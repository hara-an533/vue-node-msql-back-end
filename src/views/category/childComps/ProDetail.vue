<template>
  <ul class="pro-detail">
    <router-link tag="li" v-for="(item,index) in dataList" :key="index" :to="{name:'ProductDetails',query:{pid:item.id}}">
      <div class="img">
        <img :src="item.poster" alt />
      </div>
      <div class="desc">
        <p class="pro-title">{{item.title}}</p>
        <div class="pro-attr">
          <span>6GB运存</span>
          <span>64GB</span>
          <span>6.59英寸</span>
        </div>
        <div class="pro-price">
          ￥
          <span>{{item.price}}</span>
        </div>
        <div class="pro_title">
          <img src="../../../assets/images/self-support.png" alt />
          <img src="../../../assets/images/rest.png" alt />
          <span class="comments">{{item.comment}}</span>
        </div>
        <span class="shop_name">荣耀京东自营旗舰店</span>
      </div>
    </router-link>
  </ul>
</template>

<script>
import sj01 from "../../../assets/upload/sj01.jpg";
export default {
  name: "ProDetail",
  data() {
    return {
      dataList: []
    };
  },
  props: ["c3id"],
  mounted() {
    // console.log(this.c3id);
    let c3id = this.c3id;
    //获取该分类的产品列表
    this.axios.get("api/getproductList?c3id=" + c3id).then(response => {
      this.dataList = response.data;
    });
  }
};
</script>

<style scoped>
.pro-detail li {
  width: 100%;
  height: 149px;
  display: flex;
  padding: 10px 0 5px 10px;
  border-bottom: 1px solid #f4f4f4;
}

.pro-detail li .img img {
  width: 120px;
  height: 120px;
  margin-top: 12px;
}

.desc {
  padding: 10px 10px 8px;
}

.desc .pro-title {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin: 0;
}

.pro_title img {
  height: 14px;
  margin-right: 5px;
  vertical-align: middle;
}

.pro_title img:first-child {
  width: 24px;
}

.pro_title img:nth-child(2) {
  width: 34px;
}

.pro-attr span {
  background-color: #f2f2f7;
  color: #ababac;
  font-size: 10px;
  padding: 2px 5px;
  margin-right: 5px;
}
.pro-price {
  color: #ea4244;
  font-size: 18px;
  margin-top: 5px;
}

.pro_title .shop_name {
  color: #a8a8a8;
  font-size: 12px;
}
</style>