<!--  -->
<template>
  <div class="headerBox">
    <div class="pic">
      <img src="../assets/images/timg.jpg" />
    </div>
    <span class="name">名字</span>
    <br />
    <br />
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
export default {
  setup() {},
  props: {},
};
</script>


<style lang='scss' scoped>
.headerBox {
  background-color: #4fc08d;
  width: 200px;
  top: 100px;
  left: 0;
  margin: 20px;
}
.pic {
  margin: 10px;
}
img {
  width: 70px;
  margin: 15px;
}
.name {
  margin: 15px;
}
</style>