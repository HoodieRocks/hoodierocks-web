<script lang="ts">
	export const prerender = true

	import '../../app.css';
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

<slot />

