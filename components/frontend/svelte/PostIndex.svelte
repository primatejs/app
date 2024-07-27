<script>
  import t from "@primate/i18n/svelte";
  import locale from "@primate/i18n/svelte/locale";
  import PostLink from "./PostLink.svelte";

  export let posts = [], title = "";
  let count = 0;
</script>
<svelte:head>
  <title>Primate template app (Svelte)</title>
  <meta name="keywords" content={title} />
</svelte:head>
<h1 on:click={() => { console.log("clicked!"); }}>{$t("All posts")}</h1>
{#each posts as post}
<PostLink {post} />
{/each}
<h3>{$t("Counter")}</h3>
<div>{count}</div>
<button on:click={() => { count = count + 1; }}>+</button>
<h3>{$t("Switch language")}</h3>
<div><a on:click={() => locale.set("en-US")}>{$t("English")}</a></div>
<div><a on:click={() => locale.set("de-DE")}>{$t("German")}</a></div>
