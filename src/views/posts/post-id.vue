<template>
  <div>
    <TinyEditor v-model="editorContent" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import TinyEditor from "../../components/TinyEditor.vue";

const editorContent = ref<string>("Initial Content");

function submitPost() {
  console.log("Submitted Content:", editorContent.value);
}
</script>

<style scoped>
div {
  padding: 150px 0 0;
}
</style>
