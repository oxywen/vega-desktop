<template>
  <span class="simple-clock">
    <i18n-d tag="span" :value="datetime" format="simple">
      <template #literal="props">
        <span class="literal">{{ props.literal }}</span>
      </template>
      <template #year="props">
        <span class="year">{{ props.year }}</span>
      </template>
      <template #month="props">
        <span class="month">{{ props.month }}</span>
      </template>
      <template #day="props">
        <span class="day">{{ props.day }}</span>
      </template>
      <template #weekday="props">
        <span class="weekday">{{ props.weekday }}</span>
      </template>
      <template #dayPeriod="props">
        <span class="day-period">{{ props.dayPeriod }}</span>
      </template>
      <template #hour="props">
        <span class="hour">{{ props.hour }}</span>
      </template>
      <template #minute="props">
        <span class="minute">{{ props.minute }}</span>
      </template>
      <template #second="props">
        <span class="second">{{ props.second }}</span>
      </template>
    </i18n-d>
  </span>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const datetime = ref(new Date())
setInterval(() => {
  datetime.value = new Date()
}, 1000)
</script>

<style lang="less">
.simple-clock {
  line-height: 100%;

  .weekday {
    margin-left: 0.5rem;
  }
  .hour {
    margin-left: 0.25rem;
  }
}
</style>
