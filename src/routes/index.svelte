<script>
    import GoToTop from '../components/GoToTop.svelte';
    import TypingText from '../components/TypingText.svelte';

    let scrollY = 0;
    let innerWidth = 0;
</script>

<svelte:window bind:scrollY bind:innerWidth />

<svelte:head>
    <title>Indigo Development | Home</title>
    <meta name="description" content="Welcome to Indigo Development. Creators of Rockwall and beautiful frontends">
    <meta property="og:title" value="Indigo Development | Home">
    <meta property="og:image" value="indigo.png">
    <meta property="og:description" value="Welcome to Indigo Development. Creators of Rockwall and beautiful frontends">
    <meta property="og:url" value="https://1ndiigo.github.io">
</svelte:head>

<main>
    <section
        class="flex items-center justify-center w-full h-[72rem] md:h-screen p-6 transition-all duration-500  {scrollY <=
        200
            ? 'bg-neutral-200'
            : 'bg-indigo-600'}"
    >
        <div>
            <TypingText
                text="Hello World"
                classes="text-7xl md:text-8xl lg:text-9xl font-mono font-bold {scrollY <= 200
                    ? 'text-indigo-600'
                    : 'text-neutral-200'} transition-colors pb-6 select-none"
            />
            <h2
                class="text-2xl md:text-4xl font-sans font-light {scrollY <= 200
                    ? 'text-neutral-500'
                    : 'text-neutral-300 text-opacity-60'} text-center"
            >
                Welcome to Indigo Development
            </h2>
        </div>
    </section>
    <section
        class="w-full h-screen transition-all duration-500 {scrollY <= 200
            ? 'bg-neutral-200'
            : 'bg-indigo-600'}"
    >
        <div class="flex items-center flex-col pb-32">
            <h3 class="text-center font-sans text-neutral-200 font-bold text-5xl pb-6">Projects</h3>
            <p
                class="text-center font-sans text-neutral-200 font-light text-3xl text-opacity-60 px-4 w-full md:w-1/2"
            >
                These are a bunch of projects I am currently working on
            </p>
        </div>

        <div class="grid grid-cols-4 grid-rows-6 gap-3 transition-all duration-500 {scrollY <= 200
            ? 'bg-neutral-200'
            : 'bg-indigo-600'}">
            <!--"hill-rockslide" by Font Awesome 6 is licensed under CC BY 4.0-->
            <img
                src="icons/hill-rockslide.svg"
                alt="Hill Rockslide by Font Awesome 6"
                class="invert select-none h-full p-8 self-center justify-self-center"
            />
            <div id="projects" class="col-span-2 xl:col-span-1 scroll-m-96">
                <h4 class="text-neutral-200 font-bold text-4xl mb-4">Rockwall</h4>
                <p class="text-neutral-200 font-light text-lg text-opacity-60">
                    Rockwall is a highly configurable, feature-rich chat Bukkit plugin. Rockwall has
                    features some similar chat plugins do not such as parties, @ mentions or emojis
                    like :shrug:
                </p>
                <div class="flex items-center justify-between w-20">
                    <a href="https://github.com/1ndiigo/Rockwall">
                        <!--"github" by Font Awesome 6 is licensed under CC BY 4.0-->
                        <img src="icons/github.svg" alt="GitHub logo" class="invert select-none h-7 mt-6" />
                    </a>
                    <a href="https://www.spigotmc.org/resources/rockwall.103709/">
                        <!--"faucet-drip" by Font Awesome 6 is licensed under CC BY 4.0-->
                        <img src="icons/spigot.svg" alt="Leaky spigot" class="invert select-none h-7 mt-6" />
                    </a>
                </div>
            </div>
            <div class="col-span-2"/>
            <div class="col-span-4"></div>
            {#if innerWidth >= 768}
                <div/>
            {/if}
            <p class="col-span-2 text-6xl text-neutral-200 w-full text-center">More projects will be added soon!</p>
        </div>
    </section>
    <GoToTop />
</main>
