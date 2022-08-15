<script lang="ts">
    import { goto } from "$app/navigation"
    import { page } from "$app/stores";

    let scrollY = 0

    let path = $page.url.pathname

    function home() {
        goto('/')
    }
</script>

<svelte:window bind:scrollY/>

<nav class="p-4 w-full fixed text-neutral-500 font-mono transition-colors">
    <ul class="flex flex-col sm:flex-row items-center justify-between">
        <img src="{scrollY === 0 && path == '/' ? "indigo.svg" : "indigo-white.svg"}" alt="Indigo logo" class="h-9 cursor-pointer" on:click="{home}">
        <div class="w-full md:w-1/2 lg:w-1/3 xl:w-1/5 flex flex-col sm:flex-row items-center justify-between">
            <a href="/#projects" class="nav-link {scrollY === 0 ? "text-neutral-600 hover:text-white hover:bg-indigo-600" : "text-neutral-200 hover:text-opacity-60"}">Projects</a>
            <a href="http://" class="nav-link {scrollY === 0 ? "text-neutral-600 hover:text-white hover:bg-indigo-600" : "text-neutral-200 hover:text-opacity-60"}">About</a>
            <a href="http://" class="nav-link {scrollY === 0 ? "text-neutral-600 hover:text-white hover:bg-indigo-600" : "text-neutral-200 hover:text-opacity-60"}">Contact</a>
        </div>
        <div class="w-36"></div>
    </ul>
</nav>