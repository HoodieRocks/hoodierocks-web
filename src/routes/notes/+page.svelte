<script lang="ts">
  import DOMPurify from 'isomorphic-dompurify';
  import TurndownService from 'turndown'
  import { marked } from 'marked'

  let rawText = "# hello world"
  let md = DOMPurify.sanitize(marked.parse(rawText.replace(/^[\u200B\u200C\u200D\u200E\u200F\uFEFF]/,"")))
  let text = md

  let markdownTimeout = 5000
  
  function onType(e: KeyboardEvent) {
    let turndownService = new TurndownService()
    text = turndownService.turndown(rawText).replace("\\", "")
    console.log("hello")
  }


</script>

<svelte:window on:keypress={onType}/>

<main class="bg-slate-800 w-screen h-screen">
  <div id="text" class="text-white">
    {@html text}
  </div>
</main>