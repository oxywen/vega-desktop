<template>
  <div class="vega-status-bar flex-row">
    <div class="system-menu-btn bar-item bar-btn flex-row">
      <svg
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="currentColor"
      >
        <path
          d="M725.507 669.185l-4.797 36.784h-25.587v-33.585l-52.775-7.997 4.799-20.788c22.39-15.992 115.145 17.589 182.313-78.367 67.168-95.954 12.993-157.595 0-167.905-16.793-13.326-105.551 1.597-105.551 1.597s51.178-44.592 63.968-92.757 0-123.138 0-123.138C740 102 648.742 96.668 648.742 96.668 552 160.667 519.205 326.959 519.205 326.959l-22.389-1.598c-17.591-70.366-73.566-148.729-174.319-175.918-100.752-27.189-139.134 89.559-139.134 89.559-3.2 150.33 126.341 239.885 126.341 239.885C61.822 515.68 68.217 632.404 68.217 632.404c79.961 134.337 319.852 87.959 319.852 87.959l4.797 73.563c148.729 9.597 217.496-39.98 217.496-39.98l6.398 68.766c-47.979 54.374-38.382 123.145-38.382 123.145 91.157-20.789 118.344-118.345 118.344-118.345l39.98-15.992 105.55-14.393c111.949-113.549 113.547-190.313 113.547-190.313-150.331-9.595-230.292 62.371-230.292 62.371zM519.205 530.051c-15.898 0-28.788-12.889-28.788-28.788 0-15.897 12.89-28.786 28.788-28.786 15.896 0 28.786 12.888 28.786 28.786 0 15.899-12.889 28.788-28.786 28.788z m187.11 239.887v-7.993s68.77-57.573 87.96-52.776c19.192 4.798-38.384 68.762-87.96 60.769z"
          fill="currentColor"
        ></path>
      </svg>
    </div>
    <div class="left-fixed flex-row">
      <div class="bar-item bar-btn">
        <TaskManager />
      </div>
      <div class="bar-item bar-btn">
        <BarLineSearch />
      </div>
      <div class="bar-item">
        <LineLyric />
      </div>
    </div>
    <div class="right-fixed flex-row">
      <div class="bar-item bar-btn">
        <ControlCenter />
      </div>
      <div class="bar-item bar-btn">
        <SimpleClock />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SimpleClock from './SimpleClock.vue'
import BarLineSearch from './BarLineSearch.vue'
import LineLyric from './LineLyric.vue'
import ControlCenter from './ControlCenter.vue'
import TaskManager from './TaskManager.vue'
</script>

<style lang="less">
.vega-status-bar {
  height: 1.75rem;
  width: 100%;
  padding: 0 0.375rem;
  background-color: hsla(240, 24%, 100%, 0.3);
  fill: hsl(0, 0%, 11%);
  backdrop-filter: blur(12px);
  box-sizing: border-box;
  font-size: 0.8rem;
  .system-menu-btn {
    width: 2.75rem;
    height: 100%;
    margin-left: 0;
    color: #ffffff;
    cursor: pointer;
  }
  .show-desktop-btn {
    width: 0.375rem;
  }
  .left-fixed {
    height: 100%;
    margin-left: 0;
    margin-right: auto;
  }
  .right-fixed {
    height: 100%;
  }
  .bar-item {
    height: 100%;
    box-sizing: border-box;
    background-color: transparent;
    color: #ffffff;
    border-radius: 0.25rem;
    transition:
      color ease-out 0.1s,
      background-color ease-out 0.1s;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    svg {
      color: inherit;
    }
    &:hover {
      background-color: rgba(255, 255, 255, 0.25);
      color: #c396ed;
    }
  }
  .bar-btn {
    padding: 0 0.5rem;
  }
}
</style>
