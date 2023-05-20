import svelte from "@primate/svelte";
import htmx from "@primate/htmx";
import esbuild from "@primate/esbuild";
import react from "@primate/react";
import vue from "@primate/vue";
import session from "@primate/session";
import ws from "@primate/ws";
import guard from "@primate/guard";
import {default as store, json} from "@primate/store";
import surrealdb from "@primate/surrealdb";
import types from "@primate/types";
import {Logger} from "primate";

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
    level: Logger.Info,
    trace: true,
  },
  modules: [
    svelte({entryPoints: ["PostIndex.svelte", "Recipe.svelte"]}),
    htmx(),
    react(),
    vue(),
    esbuild(),
    types(),
    store({driver: json({path: "./data/db.json"})}),
    // comment in to use surrealdb, fill in user and pass
    /*store({driver: surrealdb({user: "", pass: ""})}),*/
    session(),
    ws(),
    guard(),
  ],
};
