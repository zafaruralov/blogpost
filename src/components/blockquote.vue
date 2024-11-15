<template>
  <blockquote class="custom-blockquote">
    <slot></slot>
  </blockquote>
</template>

<script setup></script>

<style scoped>
.custom-blockquote {
  padding: 10px;
  border-left: 4px solid #4caf50;
  color: #666;
  background-color: #f9f9f9;
}
</style>
