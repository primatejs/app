import Logger from "primate/logger";

// binding
/*
*/
import go from "@primate/binding/go";
import python from "@primate/binding/python";
import ruby from "@primate/binding/ruby";
import typescript from "@primate/binding/typescript";

// frontend
import angular from "@primate/frontend/angular";
import html from "@primate/frontend/html";
import eta from "@primate/frontend/eta";
import handlebars from "@primate/frontend/handlebars";
import htmx from "@primate/frontend/htmx";
import markdown from "@primate/frontend/markdown";
import marko from "@primate/frontend/marko";
import react from "@primate/frontend/react";
import solid from "@primate/frontend/solid";
import svelte from "@primate/frontend/svelte";
import voby from "@primate/frontend/voby";
import vue from "@primate/frontend/vue";
import webc from "@primate/frontend/webc";

// store
import store from "@primate/store";
import json from "@primate/store/json";
import mysql from "@primate/store/mysql";
import postgresql from "@primate/store/postgresql";
import sqlite from "@primate/store/sqlite";
import surrealdb from "@primate/store/surrealdb";

// misc
import i18n from "@primate/i18n";
import session from "@primate/session";
import native from "@primate/native";

export default {
  http: {
    // comment in this section and run `npm run generate-ssl` for secure HTTP
    // ssl: { key: "./ssl/default.key", cert: "./ssl/default.crt" },
  },
  logger: {
    // Logger.Warn for warnings and errors, Logger.Error for errors only
 //   level: Logger.Info,

    // comment in for stack traces on errors
    trace: true,
  },
  build: {
    // include directories in build
    includes: ["services"],
  },
  modules: [
    // frontends
    /*
    */
    htmx({
      extensions: ["client-side-templates", "head-support"],
      client_side_templates: ["handlebars", "mustache"],
    }),
    html(),
    markdown(),
    react(),
    angular(),
    solid({ extension: ".solid" }),
    svelte(),
    vue(),
    handlebars(),
    webc(),
    marko(),
    eta(),
    voby(),
    // bindings
    typescript(),
    go(),
    python(),
    ruby(),
    // stores
    // volatile, per app run, in-memory database
    // comment out and comment in any other option below for other databases
    store(),

    // JSON file database
    // make sure /tmp is writable or change to a directory of your choice
    //store({ driver: json({ database: "/tmp/app.json" }) }),

    // SurrealDB
    //store({ driver: surrealdb({ username: "", password: "" })}),

    // SQLite
    //store({ driver: sqlite({ database: ":memory" })}),

    // MySQL
    //store({ driver: mysql({ username: "app", database: "app" }) }),

    // PostgreSQL
    //store({ driver: postgresql({ username: "app", database: "app" }) }),

    // MongoDB
    //store({ driver: mongodb({ database: "app" }) }),

    // use sessions
    session(),

    // use internalization
    i18n({ locale: "en-US" }),

    // add native targets
    native({ start: "/frontend" }),
  ],
};
