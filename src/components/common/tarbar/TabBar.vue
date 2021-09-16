<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {}
</script>

<style>
#tab-bar {
  display: flex;
  background-color: #f6f6f6;
  /* 固定定位,绝对定位,相对于浏览器窗口定位 */
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  /* 阴影(x,y,模糊半径,颜色) */
  box-shadow: 0 -1px 2px rgba(100, 100, 100, 0.2);
  z-index: 999;
}
</style>
