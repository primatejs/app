import { Logger } from "primate";
// environment variables {{{
// env loads variables from .env, overridable by .local.env
// to distinguish between environments, use JS_ENV
// `JS_ENV=test` will load from .env.local.test, otherwise from .env.test
// import env from "runtime-compat/env";
// }}}
// bundler {{{
import esbuild from "@primate/esbuild";
// }}}
import liveview from "@primate/liveview";
import session from "@primate/session";
import i18n from "@primate/i18n";
import ws from "@primate/ws";
import types from "@primate/types";
import store from "@primate/store";
// frontend frameworks {{{
import { htmx, markdown, react, solid, svelte, vue, handlebars }
  from "@primate/frontend";
// }}}
// }}}
// database drivers {{{
// import {json} from "@primate/store";
// import {surrealdb} from "@primate/store";
// import {sqlite} from "@primate/store";
// }}}
export default {
  // HTTP server {{{
  http: {
    // comment in this section and run `npm run generate-ssl` for secure HTTP
    //
    // /*ssl: {
    // key: "./ssl/default.key",
    // cert: "./ssl/default.crt",
    // },
  },
  // }}}
  // logging {{{
  logger: {
    // change to
    // Logger.Warn for only showing warnings
    // Logger.Error for only showing errors
    level: Logger.Info,

    // comment in for stack traces on errors
    trace: true,
  },
  // }}}
  // build {{{
  build: {
    transform: {
      paths: ["pages/app.html", "static/manifest.json", "components/**/*.svelte"],
      mapper: contents => contents.replace("<title>", "<title>hi").replace("%token%", "BLUH"),
    },
    includes: ["services"],
  },
  // }}}
  // modules {{{
  modules: [
    // frontend frameworks {{{
    react(),
    solid({ extension: "solid" }),
    vue(),
    svelte(),
    htmx(),
    markdown({ directory: "content" }),
    handlebars(),
    // }}}
    // bundler {{{

    // run `npm run serve` to run in production mode, activating bundling
    // in dev mode (`npm start`) the bundler is a no-op
    esbuild(),
    // }}}
    types(),
    // databases {{{

    // volatile, per app run, in-memory database
    // comment out and comment in any other option below for other databases
    store(),

    // JSON file database
    // make sure /tmp is writable or change to a directory of your choice
    // store({driver: json({filename: "/tmp/db.json"})}),

    // SurrealDB
    // install SurrealDB first at https://surrealdb.com/install
    // fill in user and pass
    // store({driver: surrealdb({user: "", pass: ""})}),

    // SQLite
    // store({driver: sqlite({filename: ":memory:"})}),

    // }}}
    session(),
    // ws(),
    liveview(),
    i18n(),
  ],
  // }}}
};
