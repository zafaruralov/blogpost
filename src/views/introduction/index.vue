<template>
	<div class="intro">
		<header class="intro-header">
			<h1 class="intro-header__title">Hey, I ' m Zafar</h1>
			<p class="intro-header__pronunciation">My name is pronounced as /ˈzɑː.fər/</p>
		</header>
		<section class="intro-section">
			<img src="" alt="profile image" class="intro-section__image" />
			<div class="intro-section__about">
				<h1 class="intro-section__about-title">
					Hey there! I’m a software engineer based in Tashkent, currently working with the engineering team at Realsoft.
				</h1>
				<h1 class="intro-section__about-title">
					This site is where I share insights and experiences in software development—especially around JavaScript,
					TypeScript, and web technologies. It’s my digital
					<span class="intro-section__about-link" @click="$router.push({ name: 'posts' })">space</span>
					to explore ideas, tackle coding challenges, and document what I learn.
				</h1>
				<h1 class="intro-section__about-title">
					If you enjoy the content, consider bookmarking this page or subscribing. And if you’d like to support my work,
					<span class="intro-section__about-link" @click="redirectToCoffee"> a coffee is always appreciated!</span>
				</h1>
			</div>
		</section>
		<!-- <Contact /> -->
	</div>
</template>
<script setup>
function redirectToCoffee() {
	window.location.replace("https://buymeacoffee.com/sultonovzav");
}
</script>
