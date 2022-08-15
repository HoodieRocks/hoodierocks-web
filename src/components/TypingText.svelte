<script lang="ts">
    export let text: string;
    export let classes: string
    
    let textState = text.at(0) ?? "Error"
    let counter = 1

    let interval = setInterval(() => {
        let nextChar = text.at(counter)

        if(!nextChar) {
            clearInterval(interval)
            return
        } 

        textState = textState + nextChar
        counter++
    }, 150)
</script>

<p class="{classes}">{textState}<span class="animate-blink">_</span></p>