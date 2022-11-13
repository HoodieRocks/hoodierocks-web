<script lang="ts">
	import Navigation from '../components/Navigation.svelte';
	import '../app.css';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	let scroll = 0;
	let innerHeight = 0
	let outerHeight = 0
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;900&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<svelte:window bind:scrollY={scroll} bind:innerHeight={innerHeight} bind:outerHeight={outerHeight} />

{#if scroll > 200 || (browser && innerHeight < window.screen.height)}
	<Navigation />
{/if}

<slot />
