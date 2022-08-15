<script lang="ts">
    import { browser } from "$app/env";
import { goto } from "$app/navigation";


    function home() {
        goto('/#top')
    }
</script>

<footer>
    <div class="h-64 bg-neutral-200 flex items-center justify-evenly">
        <img src="indigo.svg" alt="Indigo logo" class="h-9 cursor-pointer" on:click="{home}">
        <div class="w-1/12 flex flex-col sm:flex-row items-center justify-between">
            <a href="https://github.com/1ndiigo/">
                <!--"github" by Font Awesome 6 is licensed under CC BY 4.0-->
                <img src="github.svg" alt="GitHub logo" class="select-none h-7 mt-6" />
            </a>
            <a href="https://discord.com/3znQkj837T">
                <!--"discord" by Font Awesome 6 is licensed under CC BY 4.0-->
                <img src="discord.svg" alt="Discord logo" class="select-none h-7 mt-6" />
            </a>
            <a href="https://instagram.com/geode.dev">
                <!--"instagram" by Font Awesome 6 is licensed under CC BY 4.0-->
                <img src="instagram.svg" alt="Instagram logo" class="select-none h-7 mt-6" />
            </a>
        </div>
    </div>
</footer>