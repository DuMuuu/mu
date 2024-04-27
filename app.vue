<script setup lang="ts">
useSeoMeta({
  // 网页标题
  title: 'Love',
  // 描述
  description: 'Love',
  // 搜素关键字
  keywords: 'Love'
})
</script>

<template>
  <div class="container" onselectstart="return false;" unselectable="on" style="-moz-user-select:none;">

    <div class="body_left">
      <img src="./assets/images/biubiubiu.gif" alt="" ondragstart='return false;'>
    </div>

    <div class="body_center love">
      <div class="block">
        <div class="div1"></div>
        <div class="div2"></div>
        <div class="div3"></div>
        <div class="div4"></div>
      </div>
    </div>

  </div>

  <div class="footer">
    <div class="border">
      <div class="border-top"></div>
      <div class="border-bottom"></div>
    </div>

    <div class="copyright">
    </div>
  </div>
</template>
<style></style>
