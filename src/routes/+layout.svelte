<script lang="ts">
	export const prerender = true
	
	import Navigation from '$components/Navigation.svelte';
	import '../app.css';
	import { browser } from '$app/environment';
	import Footer from '$components/Footer.svelte';

	let scroll = 0;
	let innerHeight = 0
	let outerHeight = 0
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		async
		href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;900&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<svelte:window bind:scrollY={scroll} bind:innerHeight={innerHeight} bind:outerHeight={outerHeight} />

{#if scroll > 200 || (browser && innerHeight < window.screen.height)}
	<Navigation />
{/if}

<slot />

<Footer/>
