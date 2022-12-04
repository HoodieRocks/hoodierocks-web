<script>
	import { slide, fly } from 'svelte/transition';

	let width = 0;
	let showDropdown = false;
</script>

<svelte:window bind:innerWidth={width} />

<nav
	class="w-full fixed py-8 md:py-3 z-50 bg-indigo-600 bg-opacity-10 transition-all"
	transition:slide={{ duration: 250 }}>
	<div class="flex justify-between items-center h-auto transition-all">
		<a href="/">
			<img src="indigo.svg" alt="Indigo logo" class="h-8 cursor-pointer" height="32" width="128"/>
		</a>
		<div class="flex flex-row justify-between items-center mr-4 w-auto md:w-1/3 lg:w-1/4 xl:w-1/5">
			{#if width > 768}
				<a href="/#about" class="text-neutral-200 font-medium">About</a>
				<a href="/creations" class="text-neutral-200 font-medium">Creations</a>
				<a href="/contact" class="text-neutral-200 font-medium">Contact Me</a>
			{:else}
				<a
					href="/creations"
					class="text-neutral-200 font-semibold text-xs bg-indigo-600 p-2 rounded-sm hover:bg-indigo-700 transition-colors">
					Creations
					<img
						src="terminal-solid.svg"
						alt="terminal icon"
						width="12"
						height="12"
						class="inline-block ml-2 invert" />
				</a>
				<button
					class="flex flex-col"
					on:click={() => {
						showDropdown = !showDropdown;
					}}
					on:keydown={(code) => (code.key === 'n' ? (showDropdown = !showDropdown) : null)}>
					<img src="bars-solid.svg" alt="bars" class="ml-4 invert cursor-pointer" width="24" height="24" />
					{#if showDropdown}
						<div class="absolute top-20 right-4 w-1/4 flex flex-col">
							<a
								href="/#about"
								class="bg-neutral-800 text-neutral-200 p-1 border-2 border-white text-xs font-medium text-right"
								transition:fly={{ y: -20, delay: 0 }}>
								About
							</a>
							<a
								href="/contact"
								class="bg-neutral-800 text-neutral-200 p-1 border-2 border-white text-xs font-medium text-right"
								transition:fly={{ y: -20, delay: 100 }}>
								Contact Me
							</a>
						</div>
					{/if}
				</button>
			{/if}
		</div>
	</div>
</nav>
