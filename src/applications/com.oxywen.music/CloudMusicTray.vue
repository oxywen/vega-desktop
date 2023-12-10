<template>
  <VegaAppTray>
    <img :src="icon" />
  </VegaAppTray>
</template>

<script setup lang="ts">
import VegaAppTray from '@/components/sdk/VegaAppTray.vue'
import icon from './icon.png'
</script>

<style scoped lang="less"></style>
