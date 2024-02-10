import {Logger} from "primate";
// environment variables {{{
/*
 * env loads variables from .env, overridable by .local.env
 * to distinguish between environments, use JS_ENV
 * `JS_ENV=test` will load from .env.local.test, otherwise from .env.test
 */
// import env from "runtime-compat/env";
// }}}
// bundler {{{
import { esbuild } from "@primate/build";
// }}}
import { go, python, typescript, ruby } from "@primate/binding";
import session from "@primate/session";
import i18n from "@primate/i18n";
import types from "@primate/types";
import store from "@primate/store";
// frontend frameworks {{{
import {
  htmx,
  markdown,
  react,
  angular,
  solid,
  svelte,
  vue,
  handlebars,
  webc,
  marko,
} from "@primate/frontend";
// }}}
// database drivers {{{
import {json, sqlite, postgresql, mongodb} from "@primate/store";
// }}}
export default {
  // HTTP server {{{
  http: {
    /*
     * comment in this section and run `npm run generate-ssl` for secure HTTP
     */
    /*
    /*ssl: {
      key: "./ssl/default.key",
      cert: "./ssl/default.crt",
    },*/
    /*csp: {
      "script-src": "'self' 'unsafe-inline'",
    }*/
  },
  // }}}
  // logging {{{
  logger: {
    /*
     * change to
     * Logger.Warn for only showing warnings
     * Logger.Error for only showing errors
     */
    level: Logger.Info,

    // comment in for stack traces on errors
    trace: true,
  },
  http: {
    csp: {
      "default-src": "*",
    },
  },
  // }}}
  // build {{{
  build: {
    includes: ["services"],
  },
  // }}}
  // modules {{{
  modules: [
    // frontend frameworks {{{
    htmx({ 
      extensions: ["client-side-templates", "head-support"], 
      client_side_templates: ["handlebars", "mustache"], 
    }),
    markdown(),
    react(),
    angular(),
    solid({extension: ".solid"}),
    svelte(),
    vue(),
    handlebars(),
    webc(),
    marko(),
    // }}}
    // bundler {{{

    typescript(),
    go(),
    python(),
    ruby(),
    // run `npm run serve` to run in production mode, activating bundling
    // in dev mode (`npm start`) the bundler is a no-op
    esbuild({}),
    // }}}
    types(),
    // databases {{{

    // volatile, per app run, in-memory database
    // comment out and comment in any other option below for other databases
    // store(),

    // JSON file database
    // make sure /tmp is writable or change to a directory of your choice
    store({driver: json({filename: "/tmp/db.json"})}),

    // SurrealDB
    // install SurrealDB first at https://surrealdb.com/install
    // fill in user and pass
    // store({driver: surrealdb({user: "", pass: ""})}),

    // SQLite
    //store({driver: sqlite({filename: ":memory"})}),
    //
    // PostgreSQL
    /*store({driver: postgresql({
      user: "primate",
      db: "primate",
    })}),*/

    // MongoDB
    //store({
    //  driver: mongodb()
    //}),

    // }}}
    session(),
    i18n({ locale: "en" }),
  ],
  // }}}
};
