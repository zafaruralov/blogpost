<template>
  <div>
    <h1>Create and Save a Blog Post</h1>
    <Editor
      v-model="editorContent"
      :init="editorConfig"
      api-key="mvv8mys9rjrsadqo9bcvp0fhp81a9m3qtkewpruisjo7uhb9"
      @onEditorChange="updateContent"
    />
    <button @click="saveAsJson">Save Post</button>
    <button @click="loadJson">Load Post</button>

    <div v-if="loadedContent">
      <h2>Loaded Content:</h2>
      <div v-html="loadedContent"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import Editor from "@tinymce/tinymce-vue";
import editorConfig from "../config/editorConfig";

const editorContent = ref<string>("");

const loadedContent = ref<string | null>(null);

function updateContent(content: string) {
  editorContent.value = content;
}

function saveAsJson() {
  const blob = new Blob([JSON.stringify({ content: editorContent.value })], {
    type: "application/json"
  });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "post.json";
  link.click();
  URL.revokeObjectURL(link.href);
  console.log("Content saved as JSON.");
}

async function loadJson() {
  const fileInput = document.createElement("input");
  fileInput.type = "file";
  fileInput.accept = "application/json";
  fileInput.onchange = async (event: Event) => {
    const file = (event.target as HTMLInputElement)?.files?.[0];
    if (file) {
      const content = await file.text();
      const data = JSON.parse(content);
      loadedContent.value = data.content;
      console.log("Loaded Content:", data);
    }
  };
  fileInput.click();
}
</script>

<style scoped>
div {
  padding: 20px;
}
h1 {
  margin-bottom: 20px;
}
button {
  margin: 10px;
}
</style>

<!--  -->
<!-- api-key="mvv8mys9rjrsadqo9bcvp0fhp81a9m3qtkewpruisjo7uhb9" -->
