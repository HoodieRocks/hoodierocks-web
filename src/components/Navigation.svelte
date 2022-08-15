<script lang="ts">
    import { goto } from '$app/navigation';
    import { page } from '$app/stores';

    let scrollY = 0;

    let path = $page.url.pathname;

    function home() {
        goto('/');
    }
</script>

<svelte:window bind:scrollY />

<nav class="p-4 w-full fixed text-neutral-500 font-mono transition-colors">
    <ul class="flex flex-col sm:flex-row items-center justify-between">
        <li>
            <img
                src={scrollY <= 200 && path == '/' ? 'icons/indigo.svg' : 'icons/indigo-white.svg'}
                alt="Indigo logo"
                class="h-9 cursor-pointer"
                on:click={home}
            />
        </li>
        <li
            class="w-full md:w-1/2 lg:w-1/3 xl:w-1/5 flex flex-col sm:flex-row items-center justify-between"
        >
            <a
                href="/#projects"
                class="nav-link {scrollY <= 200
                    ? 'text-neutral-600 hover:text-white hover:bg-indigo-600'
                    : 'text-neutral-200 hover:text-opacity-60'}">Projects</a
            >
            <a
                href="/"
                class="nav-link {scrollY <= 200
                    ? 'text-neutral-600 hover:text-white hover:bg-indigo-600'
                    : 'text-neutral-200 hover:text-opacity-60'}">About</a
            >
            <a
                href="/"
                class="nav-link {scrollY <= 200
                    ? 'text-neutral-600 hover:text-white hover:bg-indigo-600'
                    : 'text-neutral-200 hover:text-opacity-60'}">Contact</a
            >
        </li>
        <li>
            <div class="w-36" />
        </li>
    </ul>
</nav>
