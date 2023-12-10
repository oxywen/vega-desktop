<template>
  <div class="vega-desktop">
    <div class="status-container">
      <StatusBar />
    </div>
    <div class="desktop-container">
      <!-- 应用图标快捷方式 -->
      <div class="desktop-wrapper">
        <template v-for="(item, index) in appList" :key="item.name">
          <VegaDesktopItem v-bind="item" v-on:dblclick="loadApp(item, index)" />
        </template>
        <template v-for="item in processList" :key="item.id">
          <component :is="item.app"></component>
        </template>
        <div class="dock-container"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import StatusBar from '@/components/status-bar/StatusBar.vue'
import VegaDesktopItem from './VegaDesktopItem.vue'
import { onMounted, ref } from 'vue'
import type { ProcessMeta, VegaDesktopItemProps } from './types'
import data from './data'

const appList = ref<VegaDesktopItemProps[]>(data)

const processList = ref<ProcessMeta[]>([])

const loadApp = (appInfo: VegaDesktopItemProps, index: number) => {
  if (appInfo.app && !appInfo.isOpen) {
    appInfo.app().then((component: any) => {
      const proces: ProcessMeta = {
        id: new Date().getTime(),
        icon: appInfo.icon,
        name: appInfo.name,
        app: component?.default
      }
      processList.value.push(proces)
      appList.value[index].isOpen = true
    })
  }
}
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
  display: flex;
  flex-flow: column;
  .status-container {
    z-index: 9999;
    overflow: hidden;
  }
  .desktop-container {
    flex: 1;
    position: relative;
    .desktop-wrapper {
      width: 100%;
      height: 100%;
      position: relative;
      z-index: 1;
      .dock-container {
        height: 5rem;
        height: 0;
      }
    }
  }
}
</style>
