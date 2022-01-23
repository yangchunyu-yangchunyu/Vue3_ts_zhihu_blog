<!--  -->
<template>
  <div class="headerBox">
    <p><router-link to="/about">分类</router-link></p>
    <p><router-link to="/edit">写文章</router-link></p>
    <van-switch v-model="checked" />
    <van-search
      v-model="value"
      background="#4fc08d"
      placeholder="请输入搜索关键词"
    />
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
export default {
  setup() {
    const checked = ref(true);
    const value = ref("");
    return { checked, value };
  },
  props: {
    day: {
      type: String,
      default: "-",
    },
    month: {
      type: String,
      default: "-",
    },
  },
};
</script>


<style lang='scss' scoped>
.headerBox {
  background-color: #4fc08d;
  width: 200px;
  top: 100px;
  left: 0;
  margin: 20px;

  .pic {
    width: 3rem;
    height: 3rem;
    margin-right: 3rem;
    background: url("../assets/images/timg.jpg") no-repeat;
    background-size: 100% 100%;
    border-radius: 50%;

    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
}
</style>