// backends
import go from "@primate/go";
import python from "@primate/python";
import ruby from "@primate/ruby";
import typescript from "@primate/typescript";

// frontends
import angular from "@primate/angular";
import eta from "@primate/eta";
import handlebars from "@primate/handlebars";
import html from "@primate/html";
import htmx from "@primate/htmx";
import markdown from "@primate/markdown";
import marko from "@primate/marko";
import react from "@primate/react";
import solid from "@primate/solid";
import svelte from "@primate/svelte";
import voby from "@primate/voby";
import vue from "@primate/vue";
import webc from "@primate/webc";

// store
/*import store from "@primate/store";
import json from "@primate/store/json";
import mysql from "@primate/mysql";
import mongodb from "@primate/mongodb";
import postgresql from "@primate/postgresql";
import sqlite from "@primate/sqlite";
import surrealdb from "@primate/surrealdb";*/

// misc
//import i18n from "@primate/i18n";
//import session from "@primate/session";
//import native from "@primate/native";

export default {
  http: {
    // comment in this section and run `npm run generate-ssl` for secure HTTP
    // ssl: { key: "./ssl/default.key", cert: "./ssl/default.crt" },
  },
  logger: {
    // level: "info",

    // comment in for stack traces on errors
//    trace: true,
  },
  build: {
    // include directories in build
    includes: ["services"],
  },
  modules: [
    // backends
    /*typescript(),
    go(),
    python(),
    ruby(),*/

    // frontends
    htmx({
      extensions: ["client-side-templates", "head-support"],
      client_side_templates: ["handlebars", "mustache"],
    }),
    markdown(),
    react(),
    angular(),
    html(),
    solid({ extension: ".solid" }),
    svelte(),
    vue(),
    handlebars(),
    webc(),
    marko(),
    eta(),
    voby(),

    // stores
    // volatile, per app run, in-memory database
    // comment out and comment in any other option below for other databases
    //store(),

    // JSON file database
    // make sure /tmp is writable or change to a directory of your choice
    //store({ driver: json({ database: "/tmp/app.json" }) }),

    // MongoDB
    //store({ driver: mongodb({ database: "app" }) }),

    // MySQL
    //store({ driver: mysql({ username: "primate", database: "primate" }) }),

    // PostgreSQL
    //store({ driver: postgresql({ username: "primate", database: "primate" }) }),

    // SQLite
    //store({ driver: sqlite({ database: ":memory:" })}),

    // SurrealDB
    //store({ driver: surrealdb({ username: "primate", password: "primate", database: "primate", namespace: "primate" })}),

    // use sessions
    //session(),

    // use internalization
    //i18n({ locale: "en-US" }),

    // add native targets
    //native({ start: "/" }),
  ],
};
