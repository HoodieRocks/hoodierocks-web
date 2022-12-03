import { c as create_ssr_component, v as validate_component, i as is_promise, n as noop } from "../../chunks/index.js";
const Navigation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `

<nav class="${"w-full fixed py-8 md:py-3 z-50 bg-indigo-600 bg-opacity-10 transition-all"}"><div class="${"flex justify-between items-center h-auto transition-all"}"><a href="${"/"}"><img src="${"indigo.svg"}" alt="${"Indigo logo"}" class="${"h-8 cursor-pointer"}"></a>
		<div class="${"flex flex-row justify-between items-center mr-4 w-auto md:w-1/3 lg:w-1/4 xl:w-1/5"}">${`<a href="${"/creations"}" class="${"text-neutral-200 font-semibold text-xs bg-indigo-600 p-2 rounded-sm hover:bg-indigo-700 transition-colors"}">Creations
					<img src="${"terminal-solid.svg"}" alt="${"terminal icon"}" width="${"12"}" class="${"inline-block ml-2 invert"}"></a>
				<button class="${"flex flex-col"}"><img src="${"bars-solid.svg"}" alt="${"bars"}" class="${"ml-4 invert cursor-pointer"}" width="${"24"}">
					${``}</button>`}</div></div></nav>`;
});
const app = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const prerender = true;
  if ($$props.prerender === void 0 && $$bindings.prerender && prerender !== void 0)
    $$bindings.prerender(prerender);
  return `${$$result.head += `<!-- HEAD_svelte-1jhvysu_START --><link rel="${"preconnect"}" href="${"https://fonts.googleapis.com"}"><link rel="${"preconnect"}" href="${"https://fonts.gstatic.com"}" crossorigin="${"anonymous"}"><link href="${"https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;900&display=swap"}" rel="${"stylesheet"}"><!-- HEAD_svelte-1jhvysu_END -->`, ""}



${validate_component(Navigation, "Navigation").$$render($$result, {}, {}, {})}

${slots.default ? slots.default({}) : ``}

${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return ``;
    }
    return function(Module) {
      return `
	${validate_component(Module.default, "Module.default").$$render($$result, {}, {}, {})}
`;
    }(__value);
  }(import("../../chunks/Footer.js"))}`;
});
export {
  Layout as default
};
