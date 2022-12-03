<script lang="ts">
	import { page } from '$app/stores';
</script>

<main class="bg-black flex items-center justify-center w-full h-screen flex-col">
	<img src="https://http.cat/{$page.status}" alt="Error: {$page.status}">
	<a href="/" class="text-white">Return to home!</a>
</main>
