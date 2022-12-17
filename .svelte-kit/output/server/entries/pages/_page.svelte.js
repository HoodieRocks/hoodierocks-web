import { c as create_ssr_component, d as createEventDispatcher, f as add_attribute, e as escape, v as validate_component } from "../../chunks/index.js";
import "svelte-reduced-motion/transition";
const Saos = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { animation = "none" } = $$props;
  let { animation_out = "none; opacity: 0" } = $$props;
  let { once = false } = $$props;
  let { top = 0 } = $$props;
  let { bottom = 0 } = $$props;
  let { css_observer = "" } = $$props;
  let { css_animation = "" } = $$props;
  const dispatch = createEventDispatcher();
  let observing = true;
  const countainer = `__saos-${Math.random()}__`;
  if ($$props.animation === void 0 && $$bindings.animation && animation !== void 0)
    $$bindings.animation(animation);
  if ($$props.animation_out === void 0 && $$bindings.animation_out && animation_out !== void 0)
    $$bindings.animation_out(animation_out);
  if ($$props.once === void 0 && $$bindings.once && once !== void 0)
    $$bindings.once(once);
  if ($$props.top === void 0 && $$bindings.top && top !== void 0)
    $$bindings.top(top);
  if ($$props.bottom === void 0 && $$bindings.bottom && bottom !== void 0)
    $$bindings.bottom(bottom);
  if ($$props.css_observer === void 0 && $$bindings.css_observer && css_observer !== void 0)
    $$bindings.css_observer(css_observer);
  if ($$props.css_animation === void 0 && $$bindings.css_animation && css_animation !== void 0)
    $$bindings.css_animation(css_animation);
  {
    dispatch("update", { observing });
  }
  return `<div${add_attribute("id", countainer, 0)}${add_attribute("style", css_observer, 0)}>${`<div style="${"animation: " + escape(animation, true) + "; " + escape(css_animation, true)}">${slots.default ? slots.default({}) : ``}</div>`}</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "@keyframes fly-in{0%{transform:translateX(4rem);opacity:0}80%{opacity:1}100%{transform:translateX(0rem)}}@media(prefers-reduced-motion: reduce){@keyframes fly-in{0%{opacity:0}100%{opacity:1}}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-myuchf_START -->${$$result.title = `<title>Indigo Development | Home</title>`, ""}<meta name="${"description"}" content="${"Hi, my name is Indigo. No that's not my real name, it's an alias, I also go by Cobblestone. I am a frontend developer designing beautiful and featureful UIs like this one."}"><meta name="${"keywords"}" content="${"development dev indigo frontend developer"}"><meta property="${"og:title"}" content="${"Indigo Development | Home"}"><meta property="${"og:description"}" content="${"Hi, my name is Indigo. No that's not my real name, it's an alias, I also go by Cobblestone. I am a frontend developer designing beautiful and featureful UIs like this one."}"><meta property="${"og:image"}" content="${"https://hoodierocks.vercel.app/indigo.png"}"><meta property="${"og:url"}" content="${"https://hoodierocks.vercel.app/"}"><meta property="${"og:type"}" content="${"website"}"><meta name="${"twitter:card"}" content="${"summary_large_image"}"><!-- HEAD_svelte-myuchf_END -->`, ""}

<main class="${"bg-really-dark-purple"}"><section class="${"w-full h-screen flex items-center justify-center flex-col"}">${``}</section>

	<div class="${"py-32"}"></div>
	${validate_component(Saos, "Saos").$$render(
    $$result,
    {
      animation: "fly-in 500ms 700ms ease-out both"
    },
    {},
    {
      default: () => {
        return `<h2 id="${"about"}" class="${"text-3xl sm:text-4xl md:text-5xl text-indigo-400 font-bold m-auto w-1/2 mb-6 text-center sm:text-left scroll-m-64"}">About me
		</h2>
		<p class="${"text-neutral-200 w-2/3 md:w-1/2 md:text-xl m-auto"}">Hi, my name is Indigo. No that&#39;s not my real name, it&#39;s an alias, I also go by Cobblestone. I
			am a frontend developer designing beautiful and featureful UIs like this one 🖥️.
		</p>`;
      }
    }
  )}
	<div class="${"py-96"}"></div>
</main>`;
});
export {
  Page as default
};
