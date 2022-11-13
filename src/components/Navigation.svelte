<script>
	import { goto } from '$app/navigation';
	import { slide } from 'svelte/transition';

	let clickedBars = false;
	let width = 0;
</script>

<svelte:window bind:innerWidth={width} />

<nav class="w-full {clickedBars ? 'bg-indigo-600' : 'bg-white bg-opacity-5'} fixed py-8 md:py-3 z-50 transition-all" transition:slide={{ duration: 250 }}>
	<div class="flex justify-between items-center {clickedBars ? 'h-screen' : 'h-auto'} md:h-auto transition-all">
        <img src={clickedBars ? "indigo-white.svg" : "indigo.svg"} alt="Indigo logo" class="h-8 cursor-pointer" on:click={() => goto('/')} on:keypress={(code) => code.key == "h" ? goto('/') : null}>
		<div class="flex flex-col md:flex-row justify-between items-center w-2/5 mx-8">
            {#if width > 768 || clickedBars}
                <a href="/#about" class="text-neutral-200 font-medium">About</a>
                <a href="/coming-soon" class="text-neutral-200 font-medium">Projects</a>
                <a href="/coming-soon" class="text-neutral-200 font-medium">Contact Me</a>
            {/if}
		</div>
	</div>
	{#if width < 768}
		<p>
			<img
				on:click={() => (clickedBars = !clickedBars)}
				on:keypress={(code) => (code.key == 'n' ? (clickedBars = !clickedBars) : null)}
				src="bars-solid.svg"
				alt="Bars"
				class="w-8 h-8 invert absolute top-[calc(50%-16px)] right-8" />
		</p>
	{/if}
</nav>
