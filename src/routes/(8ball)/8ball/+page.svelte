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
</svelte:head>

<main class="flex items-center justify-center w-full h-screen">
	{#if visible}	
		<img transition:fade={{delay: 3000, duration:300}} src="8ball.svg" alt="8ball" width="256" height="256" class="w-1/5">
	{/if}
</main>
