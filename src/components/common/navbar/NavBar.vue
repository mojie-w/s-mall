<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style>
.nav-bar {
  display: flex;
  /* 导航栏一般是44px,如果有状态栏可能是64 */
  height: 44px;
  line-height: 44px;
  /* 文字居中 */
  text-align: center;
  box-shadow: 0 1px 1px rgba(100, 100, 100, .1);
}
.left,
.right {
  /* 左右占60px */
  width: 60px;
  /* background-color: red; */
}

.center {
  /* 占用导航栏的剩余宽度 */
  flex: 1;
  /* background-color: blue; */
}
</style>