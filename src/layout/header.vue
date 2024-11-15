<template>
	<div class="profile-header">
		<header class="profile-header__header">
			<h1 title="Home" aria-label="Home" class="profile-heaeder__header-title">{{ day }} {{ time }}</h1>
		</header>
		<section class="profile-header__wrapper">
			<div class="profile-header__actions">
				<h1 @click="$router.push({ name: 'posts' })" class="profile-header__actions-posts">Posts</h1>
				<Switch />
			</div>
			<div class="profile-header__search">
				<input v-focus-k type="text" id="header-search" aria-describedby="header-search" placeholder="Search Blog" />
			</div>
		</section>
	</div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import Switch from "../components/Switch.vue";

const day = ref("");
const time = ref("");

function updateTime() {
	const now = new Date();
	day.value = now.toLocaleDateString("en-US", { weekday: "short" });
	time.value = now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });
}
onMounted(() => {
	updateTime();
	setInterval(updateTime, 60000);
});
</script>
