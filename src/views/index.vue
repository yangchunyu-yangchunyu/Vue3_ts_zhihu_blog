<!--  -->
<template>
  <div class="Home">
    <!-- <zhihuHeader :month="month" :day="day" /> -->
    <div>
      <header-on />
      <header-down />
    </div>
    <div class="tianchong"></div>

    <zhihu-newsItem
      :totalnumber="totalnumber"
      :news="newsData"
      @itemchange="itemchange"
    />
  </div>
</template>

<script lang="ts">
import zhihuHeader from "../components/Header.vue";
import zhihuBanner from "../components/Banner.vue";
import zhihuNewsItem from "../components/NewsItem.vue";
import HeaderOn from "../components/HeaderOn.vue";
import HeaderDown from "../components/HeaderDown.vue";
import { reactive, toRefs, computed, onBeforeMount, onMounted } from "vue";
import { getNewsList } from "../api/index";
import { getPageItemById } from "../api/index";
import utils from "../utils";
export default {
  components: {
    zhihuHeader,
    zhihuBanner,
    zhihuNewsItem,
    HeaderOn,
    HeaderDown,
  },

  setup() {
    const state = reactive({
      date: new Date(),
      bannerData: [],
      newsData: [],
      totalnumber: 0,
    });

    let day = computed(() => utils.formatTime(state.date)[2]);
    let month = computed(() => utils.formatTime(state.date)[1]);

    /* 获取banner数据 */
    // const getBannerData = async () => {
    //   const res = await getBannerList();
    //   state.bannerData = res.data.data;
    //   console.log(res);
    // };

    /* 初次获取newsList 数据 */
    const getNewsDataPre = async () => {
      const res = await getPageItemById(-1);
      console.log(res.data.slice(0, 5));
      state.newsData = res.data.slice(0, 5);
      state.totalnumber = res.data[6];
      console.log(state.totalnumber);
      // console.log(res.data);
    };

    onMounted(() => {
      getNewsDataPre();
    });

    async function itemchange(pageid: number) {
      console.log(pageid);
      const res = await getPageItemById(pageid);
      // let { title, author, body } = res.data;
      console.log(res.data);
      state.newsData = res.data;
    }

    return {
      ...toRefs(state),
      day,
      month,
      itemchange,
    };
  },
};
</script>


<style lang='scss' scoped>
.Home {
  width: 80%;
  height: 100%;
  display: flex;
  margin: auto;
}
.tianchong {
  width: 10%;
}
</style>