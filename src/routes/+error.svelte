<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	let fact = ""

	let goBack = () => {}

	onMount(async () => {
		const response = await fetch("https://uselessfacts.jsph.pl/random.json?language=en")
		const factObj = await response.json()
		fact = factObj.text

		goBack = () => {
			history.back()
		}
	})
</script>

<main class="bg-really-dark-purple w-full h-screen flex items-center justify-center">
	<div class="flex items-center justify-evenly w-3/5 text-white">		
		<div class="w-1/4">
			<p class="text-9xl font-bold mb-16 text-center">{$page.status}</p>
			<p class="text-5xl text-center">You Broke It</p>
		</div>
		
		<div class="w-0.5 bg-white h-96"></div>

		<div class="w-1/4 flex flex-col justify-between h-64">
			<div>
				<p class="text-4xl mb-6 font-medium">Here's a fun fact!</p>
				<p class="mb-4 font-light">{fact ? fact : "Loading your fact..."}</p>
			</div>
			<p on:click={goBack} on:keypress={goBack} class="underline text-2xl cursor-pointer">Go back!</p>
		</div>
	</div>
</main>
