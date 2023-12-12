<template>
  <button class="x-button">
    <slot></slot>
  </button>
</template>
<style>
.x-button {
  padding: 0.5rem 1rem;
  border: none;
  outline: none;
  background-color: #c396ed;
  color: #ffffff;
  border-radius: 0.25rem;
  cursor: pointer;
}
.x-button:hover {
  background-color: #ddbef6;
}
</style>
