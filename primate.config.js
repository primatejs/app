import svelte from "@primate/svelte";
import htmx from "@primate/htmx";
import esbuild from "@primate/esbuild";
import react from "@primate/react";
import vue from "@primate/vue";
import session from "@primate/session";
import {default as store, json} from "@primate/store";

export default {
  // comment in this section and run `npm run generate-ssl` for https
  /*
  http: {
    ssl: {
      key: "./ssl/default.key",
      cert: "./ssl/default.crt",
    },
  },
  */
  logger: {
    trace: true,
  },
  modules: [
    svelte({entryPoints: ["PostIndex.svelte"]}),
    htmx(),
    react(),
    vue(),
    esbuild(),
    store({driver: json({path: "/tmp/db.json"})}),
    session(),
  ],
};
