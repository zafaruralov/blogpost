<!-- DynamicRenderer.vue -->
<template>
  <div>
    <!-- Render HTML and recognize custom components -->
    <component :is="renderedContent"></component>
  </div>
</template>

<script>
import { h, resolveComponent, defineComponent } from "vue";
import Blockquote from "./blockquote.vue";

export default defineComponent({
  name: "DynamicRenderer",
  props: {
    htmlContent: {
      type: String,
      required: true
    }
  },
  components: {
    Blockquote
  },
  computed: {
    renderedContent() {
      const template = document.createElement("template");
      template.innerHTML = this.htmlContent;

      const traverseNodes = (node) => {
        console.log("node");
        if (node.nodeType === Node.TEXT_NODE) {
          console.log("not working");
          return node.textContent;
        } else if (node.nodeType === Node.ELEMENT_NODE) {
          console.log("not working");
          const tag = node.tagName.toLowerCase();
          const children = Array.from(node.childNodes).map(traverseNodes);
          const component = resolveComponent(tag);
          return component ? h(component, {}, children) : h(tag, {}, children);
        }
      };
      console.log("renderedContent");
      return traverseNodes(template.content);
    }
  }
});
</script>
