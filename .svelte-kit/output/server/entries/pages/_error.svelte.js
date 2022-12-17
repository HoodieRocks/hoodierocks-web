import { g as getContext, c as create_ssr_component, b as subscribe, e as escape } from "../../chunks/index.js";
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
const Error$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<main class="${"bg-black flex items-center justify-center w-full h-screen flex-col"}"><img src="${"https://http.cat/" + escape($page.status, true)}" alt="${"Error: " + escape($page.status, true)}">
	<a href="${"/"}" class="${"text-white"}">Return to home!</a></main>`;
});
export {
  Error$1 as default
};
