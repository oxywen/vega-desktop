<template>
  <input class="x-input" type="text" :value="props.count" />
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
const props = defineProps<{
  count: number
}>()
</script>

<style>
.x-input {
  height: 2rem;
  padding: 0 0.5rem;
  border: none;
  outline: none;
  border: 1px solid #e3e3e3;
  border-radius: 0.25rem;
}
.x-input:focus {
  border: 1px solid #c396ed;
}
</style>
