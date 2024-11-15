<template>
  <div class="posts">
    <div class="posts-list" v-for="item in data" :key="item.title" @click="watchBlog(item.keyword)">
      <h1 class="posts-list-title">{{ item.title }}</h1>
      <div class="posts-list-keyword">
        <span class="link"> # {{ item.keyword }} </span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { reactive } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

interface Post {
  id: number;
  title: string;
  keyword: string;
}
function watchBlog(postTitle: string) {
  router.push({
    name: "post-name",
    params: { postName: postTitle }
  });
}

const data: Post[] = reactive([
  {
    id: 1,
    title: "Proxy advatages and limitations",
    keyword: "proxy"
  }
]);
</script>
