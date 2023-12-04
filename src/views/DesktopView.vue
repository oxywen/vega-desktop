<template>
  <div class="vega-desktop">
    <StatusBar />
  </div>
</template>

<script setup lang="ts">
import StatusBar from '@/components/status-bar/StatusBar.vue'
</script>

<style lang="less">
.vega-desktop {
  width: 100%;
  height: 100%;
  min-width: 800px;
  min-height: 600px;
  overflow: hidden;
  font-size: 16px;
  background-image: url('@/assets/wallpaper/beautiful comets in the sky.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-color: rgb(115, 141, 112);
}
</style>
