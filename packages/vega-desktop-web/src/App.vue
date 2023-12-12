<script setup lang="ts">
import { RouterView } from 'vue-router'
import { XButton } from 'vega-desktop-sdk'
import { ExampleApp } from 'vega-desktop-applications'
</script>

<template>
  <header>
    <XButton>1234</XButton>
    <ExampleApp />
  </header>
  <RouterView />
</template>
