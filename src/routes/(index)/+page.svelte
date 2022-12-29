<script lang="ts">
	import { onMount } from 'svelte';
	import { fly, fade } from 'svelte-reduced-motion/transition';
	import Saos from 'saos';

	let visible = false;

	onMount(() => {
		visible = !visible;
	});
</script>

<svelte:head>
	<title>Indigo Development | Home</title>
	<meta
		name="description"
		content="Hi, my name is Indigo. No that's not my real name, it's an alias, I also go by Cobblestone. I am a frontend developer designing beautiful and featureful UIs like this one." />
	<meta name="keywords" content="development dev indigo frontend developer" />
	<meta property="og:title" content="Indigo Development | Home" />
	<meta
		property="og:description"
		content="Hi, my name is Indigo. No that's not my real name, it's an alias, I also go by Cobblestone. I am a frontend developer designing beautiful and featureful UIs like this one." />
	<meta property="og:image" content="https://hoodierocks.vercel.app/indigo.png" />
	<meta property="og:url" content="https://hoodierocks.vercel.app/" />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="theme-color" content="#4F46E5" />
</svelte:head>

<main class="bg-really-dark-purple">
	<section class="w-full h-screen flex items-center justify-center flex-col">
		{#if visible}
			<div
				in:fade={{ delay: 1000 }}
				class="w-screen md:w-1/2 border-2 border-indigo-400 h-screen md:h-2/3 absolute z-0 dotted" />
			<h1
				class="font-black text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] text-white text-center z-20"
				in:fly={{ x: 100, duration: 750, delay: 200 }}>
				Hello<br />World
				<img
					src="waving-hand.webp"
					alt="waving hand emoji"
					class="h-[4.5rem] sm:h-24 md:h-32 lg:h-40 w-auto inline-block align-text-top z-2 motion-safe:shake"
					height="72"
					width="72" />
			</h1>
			<p
				class="font-light text-xl sm:text-2xl md:text-3xl text-white text-opacity-60 text-center z-20"
				in:fly={{ x: 100, duration: 750, delay: 400 }}>
				Welcome to my website
			</p>
		{/if}
	</section>

	<div class="py-32" />
	<Saos animation={'fly-in 500ms 300ms ease-out both'}>
		<h2
			id="about"
			class="text-3xl sm:text-4xl md:text-5xl text-indigo-400 font-bold m-auto w-1/2 mb-6 text-center sm:text-left scroll-m-64">
			About me
		</h2>
		<p class="text-neutral-200 w-2/3 md:w-1/2 md:text-xl m-auto">
			Hi, my name is Indigo. No that's not my real name, it's an alias, I also go by Cobblestone. I
			am a frontend developer designing beautiful and featureful UIs like this one 🖥️.
		</p>
	</Saos>
	<div class="py-96" />
</main>

<style>
	@keyframes -global-fly-in {
		0% {
			transform: translateX(4rem);
			opacity: 0;
		}
		80% {
			opacity: 1;
		}
		100% {
			transform: translateX(0rem);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		@keyframes -global-fly-in {
			0% {
				opacity: 0;
			}
			100% {
				opacity: 1;
			}
		}
	}
</style>
