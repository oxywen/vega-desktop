<template>
  <div class="veag-desktop-item">
    <div class="icon-container">
      <img :src="props.icon" />
    </div>
    <div class="app-text">{{ props.name }}</div>
  </div>
</template>
<script setup lang="ts">
import type { VegaDesktopItemProps } from './types'

const props = defineProps<VegaDesktopItemProps>()
</script>

<style lang="less">
.veag-desktop-item {
  width: 4rem;
  overflow: hidden;
  font-size: 0.75rem;
  display: flex;
  flex-flow: column;
  align-items: center;
  border-radius: 0.25rem;
  padding: 0.25rem;
  cursor: default;
  user-select: none;
  .icon-container {
    width: 3rem;
    height: 3rem;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 0.5rem;
    }
  }
  .app-text {
    margin-top: 0.25rem;
    color: #ffffff;
    font-size: 0.75rem;
    line-height: 1.25em;
    max-height: 2.5rem;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-align: center;
  }
  &:hover {
    background-color: rgba(195, 150, 237, 0.5);
    .app-text {
      max-height: 12.5rem;
      text-overflow: unset;
      -webkit-box-orient: unset;
      -webkit-line-clamp: unset;
    }
  }
}
</style>
