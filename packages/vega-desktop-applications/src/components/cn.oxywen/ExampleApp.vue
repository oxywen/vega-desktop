<template>
  <div class="example-app">
    <XInput :count="count" /><XButton @click="count++">example</XButton>
  </div>
</template>
<script setup lang="ts">
import { XInput, XButton } from 'vega-desktop-sdk'
import { ref } from 'vue'
const count = ref(0)
</script>
