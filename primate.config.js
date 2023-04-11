import svelte from "@primate/svelte";
import htmx from "@primate/htmx";
import esbuild from "@primate/esbuild";
import react from "@primate/react";
import vue from "@primate/vue";

export default {
  logger: {
    traceStack: true,
  },
  modules: [
    svelte({entryPoints: ["PostIndex.svelte"]}),
    htmx(),
    react(),
    vue(),
    esbuild(),
  ],
};
