<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte-reduced-motion/transition';

	let visible = false;
	
	onMount(() => {
		let audio = new Audio('hallelujah.mp3');
		visible = !visible;
		setTimeout(() => {
			audio.play();
		}, 3000)
	});
</script>

<svelte:head>
	<title>Indigo Development | ???</title>
	<meta
		name="description"
		content="???" />
	<meta name="keywords" content="eightball eight ball 8ball 8" />
	<meta property="og:title" content="Indigo Development | ???" />
	<meta
		property="og:description"
		content="???" />
	<meta property="og:image" content="https://hoodierocks.vercel.app/indigo.png" />
	<meta property="og:url" content="https://hoodierocks.vercel.app/" />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="theme-color" content="#FFFFFF" />
</svelte:head>

<main class="flex items-center justify-center w-full h-screen">
	{#if visible}	
		<img transition:fade={{delay: 3000, duration:300}} src="8ball.svg" alt="8ball" width="256" height="256" class="w-1/5">
	{/if}
</main>
