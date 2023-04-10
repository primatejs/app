import svelte from "@primate/svelte";
import htmx from "@primate/htmx";
import esbuild from "@primate/esbuild";

export default {
  debug: true,
  modules: [svelte({entryPoints: ["PostIndex.svelte"]}), htmx(), esbuild()],
};
