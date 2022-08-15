<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

    let scrollY = 0

	function toTop() {
		goto($page.url.pathname + '#top');
	}
</script>

<svelte:window bind:scrollY/>

<p class="font-mono {scrollY < 1400 ? "text-white" : "text-neutral-800"} transition-all bottom-0 fixed w-full text-center mb-16 {scrollY > 200 ? "select-text cursor-pointer" : "select-none opacity-0"}" on:click={toTop}>Go to top</p>
