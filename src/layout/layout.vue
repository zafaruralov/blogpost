<template>
	<main class="container">
		<header class="header">
			<Header />
		</header>
		<div class="body">
			<router-view />
		</div>
	</main>
</template>
<script setup>
import Header from "./header.vue";
</script>
