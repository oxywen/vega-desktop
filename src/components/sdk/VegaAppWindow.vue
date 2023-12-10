<template>
  <div
    ref="root"
    class="vega-app vega-shadow"
    :style="{
      width: width,
      height: height,
      left: left + 'px',
      top: top + 'px',
      display: loaded ? 'block' : 'none',
      transition: onMoving || onResizing ? 'none' : ''
    }"
    :class="[props.className, isMin ? 'vega-app-min' : '']"
  >
    <div class="vega-app-wrapper">
      <div class="header flex-row">
        <div class="header-left flex-row" @mousedown="startMove" @dblclick="maxOrRestore">
          <div class="header-icon"></div>
          <div class="header-name">{{ props.appName }}</div>
          <div class="header-menu"></div>
        </div>
        <div class="header-right flex-row">
          <button @click="minimize">
            <svg
              viewBox="0 0 1024 1024"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              width="20"
              height="20"
            >
              <path
                id="svg_2"
                p-id="3862"
                fill="currentColor"
                d="m327.4,599.99999l369.2,0c33.98,0.14 61.42,27.8 61.28,61.78c-0.14,33.79 -27.49,61.15 -61.28,61.28l-369.2,0c-33.98,0.14 -61.64,-27.3 -61.78,-61.28c-0.14,-33.98 27.3,-61.64 61.28,-61.78l0.5,0z"
              />
            </svg>
          </button>
          <button v-if="isMax" @click="restoreSize">
            <svg
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
            >
              <path
                d="M429.96 594.04H224.85c-27.35-4.69-41.02-18.37-41.02-41.02 0-22.66 13.67-36.33 41.02-41.02H512v287.15c0 27.35-13.67 41.02-41.02 41.02s-41.02-13.68-41.02-41.02V594.04z m205.11-205.11h205.11c27.35 4.69 41.02 18.37 41.02 41.02s-13.68 36.33-41.02 41.02H553.02V183.83c0-27.35 13.67-41.02 41.02-41.02s41.02 13.67 41.02 41.02l0.01 205.1z"
                fill="currentColor"
              ></path>
              <path
                d="M178.85 787.14l116.03-116.03c16.02-16.02 42-16.02 58.02 0 16.02 16.02 16.02 42 0 58.02L236.86 845.15c-16.02 16.02-41.99 16.02-58.01 0s-16.02-41.99 0-58.01z m533.28-533.28l116.03-116.03c16.02-16.02 41.99-16.02 58.01 0 16.02 16.02 16.02 41.99 0 58.01L770.15 311.87c-16.02 16.02-41.99 16.02-58.01 0-16.02-16.02-16.02-41.99-0.01-58.01z"
                fill="currentColor"
                opacity="0.4"
              ></path>
            </svg>
          </button>
          <button v-else @click="maximize">
            <svg
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
            >
              <path
                d="M758.13 265.87H470.98c-27.35-4.69-41.02-18.37-41.02-41.02s13.68-36.33 41.02-41.02h369.2v369.19c0 27.35-13.67 41.02-41.02 41.02s-41.02-13.68-41.03-41.02V265.87zM265.87 758.13h287.15c27.35 4.69 41.02 18.37 41.02 41.02 0 22.66-13.68 36.33-41.02 41.02H183.83v-369.2c0-27.35 13.67-41.02 41.02-41.02s41.02 13.68 41.02 41.02v287.16z"
                fill="currentColor"
              ></path>
              <path
                d="M338.67 627.32l288.65-288.65a0.996 0.996 0 0 1 1.41 0l56.6 56.6c0.39 0.39 0.39 1.02 0 1.41L396.68 685.33a0.996 0.996 0 0 1-1.41 0l-56.6-56.6a0.996 0.996 0 0 1 0-1.41z"
                fill="currentColor"
                opacity="0.4"
              ></path>
            </svg>
          </button>
          <button>
            <svg
              viewBox="0 0 1024 1024"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              width="20"
              height="20"
            >
              <path
                d="m677.41,253.04l-421.47,420.82c-26.11,26.07 -26.14,68.37 -0.07,94.48l0.04,0.04c26.09,26.09 68.39,26.09 94.48,0l0.04,-0.04l420.82,-421.47c25.88,-25.92 25.86,-67.9 -0.04,-93.8c-25.9,-25.89 -67.88,-25.91 -93.8,-0.03z"
                fill="currentColor"
              />
              <path
                transform="rotate(90 513.492 510.794)"
                opacity="0.4"
                d="m677.41,253.04l-421.47,420.82c-26.11,26.07 -26.14,68.37 -0.07,94.48l0.04,0.04c26.09,26.09 68.39,26.09 94.48,0l0.04,-0.04l420.82,-421.47c25.88,-25.92 25.86,-67.9 -0.04,-93.8c-25.9,-25.89 -67.88,-25.91 -93.8,-0.03z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
      </div>
      <div class="content">
        <div class="mask" v-if="onMoving || onResizing"></div>
        <slot></slot>
      </div>
    </div>
    <template v-if="!isMax">
      <div class="resize-left" @mousedown="resize($event, 'left')"></div>
      <div class="resize-top" @mousedown="resize($event, 'top')"></div>
      <div class="resize-right" @mousedown="resize($event, 'right')"></div>
      <div class="resize-bottom" @mousedown="resize($event, 'bottom')"></div>
      <div class="resize-left-top" @mousedown="resize($event, 'left-top')"></div>
      <div class="resize-right-top" @mousedown="resize($event, 'right-top')"></div>
      <div class="resize-right-bottom" @mousedown="resize($event, 'right-bottom')"></div>
      <div class="resize-left-bottom" @mousedown="resize($event, 'left-bottom')"></div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { defineProps, onMounted, ref } from 'vue'
import type { VegaAppWindowProps } from './types'

const props = defineProps<VegaAppWindowProps>()

const loaded = ref(false)
const isMax = ref(props.isMax)
const isMin = ref(false)
const root = ref<HTMLDivElement>()
const width = ref(props.width)
const height = ref(props.height)
const left = ref<number>(0)
const top = ref<number>(0)
let cacheWidth = ''
let cacheHeight = ''
let cacheLeft = 0
let cacheTop = 0

onMounted(() => {
  if (props.isMax) {
    width.value = '100%'
    height.value = '100%'
    left.value = 0
    top.value = 0
  } else {
    const parent = root.value?.parentElement
    if (parent) {
      const parentW = parent.offsetWidth
      const parentH = parent.offsetHeight
      left.value = (parentW - parseInt(width.value)) / 2
      top.value = (parentH - parseInt(height.value)) / 2
    }
  }
  loaded.value = true
})

const maxOrRestore = () => {
  if (isMax.value) {
    restoreSize()
  } else {
    maximize()
  }
}

const maximize = () => {
  cachelocation()
  left.value = 0
  top.value = 0
  width.value = '100%'
  height.value = '100%'
  isMax.value = true
}

const restoreSize = () => {
  left.value = cacheLeft
  top.value = cacheTop
  width.value = cacheWidth
  height.value = cacheHeight
  isMax.value = false
}

const minimize = () => {
  isMin.value = true
}

const cachelocation = () => {
  cacheWidth = width.value
  cacheHeight = height.value
  cacheLeft = left.value
  cacheTop = top.value
}

const onMoving = ref(false)
const startMove = (e: MouseEvent) => {
  if (root.value && !isMax.value) {
    const parent = root.value.parentElement
    const parentW = parent?.offsetWidth || 0
    const parentH = parent?.offsetHeight || 0
    const offsetX = left.value - e.clientX
    const offsetY = top.value - e.clientY
    onMoving.value = true
    const move = (e: MouseEvent) => {
      if (root.value && onMoving.value) {
        let l = e.clientX + offsetX
        let t = e.clientY + offsetY
        t = t < 0 ? 0 : t
        t = t > parentH - 30 ? parentH - 30 : t
        l = l < 30 - root.value.offsetWidth ? 30 - root.value.offsetWidth : l
        l = l > parentW - 30 ? parentW - 30 : l
        left.value = l
        top.value = t
      }
    }
    const up = () => {
      document.removeEventListener('mousemove', move)
      document.removeEventListener('mouseup', up)
      onMoving.value = false
    }
    document.addEventListener('mousemove', move)
    document.addEventListener('mouseup', up)
  }
}
const onResizing = ref(false)
const resize = (e: MouseEvent, direction: string) => {
  if (root.value && !isMax.value) {
    onResizing.value = true
    const parent = root.value.parentElement
    const parentW = parent?.offsetWidth || 0
    const parentH = parent?.offsetHeight || 0
    const offsetX = left.value - e.clientX
    const offsetY = top.value - e.clientY
    const startW = parseInt(width.value)
    const startH = parseInt(height.value)
    const startX = left.value
    const startY = top.value
    onResizing.value = true
    const move = (e: MouseEvent) => {
      if (root.value && onResizing.value) {
        let l = e.clientX + offsetX
        let t = e.clientY + offsetY
        t = t > parentH - 30 ? parentH - 30 : t
        l = l > parentW - 30 ? parentW - 30 : l
        switch (direction) {
          case 'left':
            width.value = startW + (startX - l) + 'px'
            left.value = l
            break
          case 'top':
            height.value = startH + (startY - t) + 'px'
            top.value = t
            break
          case 'right':
            width.value = startW - (startX - l) + 'px'
            break
          case 'bottom':
            height.value = startH - (startY - t) + 'px'
            break
          case 'left-top':
            width.value = startW + (startX - l) + 'px'
            height.value = startH + (startY - t) + 'px'
            left.value = l
            top.value = t
            break
          case 'left-bottom':
            width.value = startW + (startX - l) + 'px'
            height.value = startH - (startY - t) + 'px'
            left.value = l
            break
          case 'right-top':
            width.value = startW - (startX - l) + 'px'
            height.value = startH + (startY - t) + 'px'
            top.value = t
            break
          case 'right-bottom':
            width.value = startW - (startX - l) + 'px'
            height.value = startH - (startY - t) + 'px'
        }
      }
    }
    const up = () => {
      onResizing.value = false
      document.removeEventListener('mousemove', move)
      document.removeEventListener('mouseup', up)
    }
    document.addEventListener('mousemove', move)
    document.addEventListener('mouseup', up)
  }
}
</script>

<style lang="less">
.vega-app {
  background-color: #ffffff;
  border-radius: 0.5rem;
  position: absolute;
  overflow: hidden;
  transition: all 0.12s linear 0s;
  font-size: 0.8rem;
  animation: fade-in 0.16s linear;
  user-select: none;
  min-width: 10rem;
  min-height: 5rem;
  .vega-app-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column;
    .header {
      height: 1.75rem;
      line-height: 100%;
      .header-left {
        height: 100%;
        line-height: 100%;
        flex: 1;
        justify-content: flex-start;
        padding-left: 0.5rem;
      }
      .header-right {
        height: 100%;
      }
      button {
        height: 100%;
        width: 1.75rem;
        padding: 0;
        border-radius: 0.25rem;
        border: none;
        outline: none;
        background-color: transparent;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #c396ed;
        &:hover {
          background-color: #c396ed;
          color: #ffffff;
        }
      }
    }
    .content {
      flex: 1;
      overflow: hidden;
      position: relative;
      & > iframe {
        width: 100%;
        height: 100%;
      }
    }
    .mask {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
    }
  }
  .resize-left {
    position: absolute;
    left: 0;
    top: 0;
    width: 5px;
    height: 100%;
    cursor: w-resize;
  }
  .resize-top {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 5px;
    cursor: n-resize;
  }
  .resize-right {
    position: absolute;
    right: 0;
    top: 0;
    width: 5px;
    height: 100%;
    cursor: e-resize;
  }
  .resize-bottom {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 5px;
    cursor: s-resize;
  }
  .resize-left-top {
    position: absolute;
    left: 0;
    top: 0;
    width: 5px;
    height: 5px;
    cursor: nw-resize;
  }
  .resize-right-top {
    position: absolute;
    right: 0;
    top: 0;
    width: 5px;
    height: 5px;
    cursor: ne-resize;
  }
  .resize-right-bottom {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 5px;
    height: 5px;
    cursor: se-resize;
  }
  .resize-left-bottom {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 5px;
    height: 5px;
    cursor: sw-resize;
  }
}
.vega-app-min {
  animation: app-min 0.16s linear forwards;
}
.vega-shadow {
  box-shadow: #0000004d 0 0 11px;
}

@keyframes fade-in {
  0%,
  25% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes app-min {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    display: none;
  }
}
</style>
