<template>
  <div>
    <!-- Use DynamicRenderer to render HTML with custom components -->
    <DynamicRenderer :htmlContent="processedContent" />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import DynamicRenderer from "@/components/DynamicRenderer.vue";

const markdownPost = `
# Three Common Interview Practices I Wish To See Less Of
Published on 19 February, 2023

> Practices that I think interviewers should avoid when conducting coding interviews.

I'm not a fan of some common practices in technical interviews for software engineer candidates...

## Ask candidates to explain concepts
Many interviewers like to ask candidates to explain programming concepts to them...

1. **Green lumber fallacy**: a form of bias where one thinks that being able to define something correlates with the ability to use it effectively in practice.
`;

function convertMarkdownToHtml(markdown) {
  return markdown
    .replace(/^# (.*?)$/gm, "<h1>$1</h1>")
    .replace(/^## (.*?)$/gm, "<h2>$1</h2>")
    .replace(/^> (.*?)$/gm, "<Blockquote>$1</Blockquote>") // Custom Blockquote tag
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/g, "<em>$1</em>")
    .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>')
    .replace(/\n\n/g, "<p></p>");
}

const processedContent = ref("");

async function fetchPostData() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return markdownPost;
}

onMounted(async () => {
  const markdownContent = await fetchPostData();
  processedContent.value = convertMarkdownToHtml(markdownContent);
  console.log(processedContent.value);
});
</script>
