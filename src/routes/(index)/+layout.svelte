<script lang="ts">
	export const prerender = true;

	import Navigation from '$components/Navigation.svelte';
	import '../../app.postcss';

	let scroll = 0;
	let innerWidth = 0;
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;900&amp;display=swap"
		rel="stylesheet" />
</svelte:head>

<svelte:window bind:scrollY={scroll} bind:innerWidth />

<Navigation />

<slot />

{#await import('$components/Footer.svelte') then Module}
	<Module.default />
{/await}
