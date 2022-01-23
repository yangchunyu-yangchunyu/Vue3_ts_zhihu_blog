<template>
  <div class="item">
    <div v-for="item in news" :key="item.id">
      <router-link :to="{ path: `/detail/${item.id}` }" class="newsItem">
        <div class="con">
          <h4>{{ item.title }}</h4>
          <span>{{ item.author }}</span>
        </div>
        <div class="pic">
          <img :src="item.img" alt />
        </div>
        <!-- <div class="comtent" v-html="item.body"></div> -->
      </router-link>
    </div>
    <van-pagination
      v-model="currentPage"
      :total-items="totalnumber"
      :items-per-page="5"
      @change="change"
    />
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup(props, context) {
    const currentPage = ref(1);

    function change() {
      console.log("change");
      context.emit("itemchange", currentPage);
    }

    return { currentPage, change };
  },
  props: {
    news: {
      type: Array,
    },
    totalnumber: {
      type: Number,
    },
  },
};
</script>

<style lang="scss">
.item {
  width: 60%;
}
.newsItem {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  margin: 0 0.5rem;
  border-bottom: 0.1rem solid #eee;
  .con {
    display: flex;
    flex-direction: column;
    margin-right: 0.3rem;
    color: #000;

    h4 {
      float: left;
      width: 15rem;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin: 1rem 1rem;
      font-size: 1rem;
      font-weight: normal;
      line-height: 1rem;
      overflow: hidden;
    }

    span {
      display: flex;
      justify-content: flex-start;
      color: #999;
      line-height: 0.5rem;
      margin: 0 1rem;
    }
  }
  .pic {
    width: 10rem;
    height: 10rem;
    background: #eee;
    margin-right: 0.5rem;
    img {
      display: block;
      width: 100%;
      height: 100%;
      border-radius: 0.1rem;
    }
  }
}
</style>