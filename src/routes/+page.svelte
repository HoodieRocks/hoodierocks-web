<script lang="ts">
	import { onMount } from 'svelte';
	import { fly, fade } from 'svelte/transition';

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
	<meta property="og:title" content="Indigo Development | Home">
	<meta property="og:description" content="Hi, my name is Indigo. No that's not my real name, it's an alias, I also go by Cobblestone. I am a frontend developer designing beautiful and featureful UIs like this one.">
	<meta property="og:image" content="https://hoodierocks.github.io/indigo.png">
	<meta property="og:url" content="https://hoodierocks.github.io/">
	<meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image">
</svelte:head>

<main class="bg-neutral-800">
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
					class="h-[4.5rem] sm:h-24 md:h-32 lg:h-40 w-auto inline-block align-text-top z-2 shake"  height="72" width="72"/>
			</h1>
			<p
				class="font-light text-xl sm:text-2xl md:text-3xl text-white text-opacity-60 text-center z-20"
				in:fly={{ x: 100, duration: 750, delay: 400 }}>
				Welcome to my website
			</p>
		{/if}
	</section>
	{#if visible}
	<div class="py-32"></div>
		<h2
			id="about"
			class="text-3xl sm:text-4xl md:text-5xl text-indigo-400 font-bold m-auto w-1/2 mb-6 text-center sm:text-left scroll-m-64">
			About me
		</h2>
		<p
			class="text-neutral-200 w-2/3 md:w-1/2 m-auto md:text-xl"
			in:fly={{ x: 100, duration: 750, delay: 750 }}>
			Hi, my name is Indigo. No that's not my real name, it's an alias, I also go by Cobblestone. I
			am a frontend developer designing beautiful and featureful UIs like this one 🖥️.
		</p>
	{/if}
	<div class="py-96" />
</main>
