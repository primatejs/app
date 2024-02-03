<script>
  import Inner from "./Inner.svelte";
  import t from "@primate/i18n/svelte";
  import {locale}  from "@primate/i18n/svelte";
  import {getContext, onMount} from "svelte";
  import {writable} from "svelte/store";

  import users from "../../services/users.js";

  export let posts, errors;

  let count = 0;

  $: doubled = count * 2;

  function handleClick() {
    count = count+1;
  }
  let username = "t2x33";
</script>
{$t("hi", {})};
<a on:click={() => locale.set("en")}>english</a>
<a on:click={() => locale.set("de")}>german</a>
{$t("bye")};
<div>{$t("ph", {here: $t("bye")})}</div>
<button on:click={handleClick}>count: {count}</button>
{doubled}
<h1>All posts</h1>
{#each posts as post}
<h2><a href="/post/view/{post.id}">{post.title}</a></h2>
{/each}
<h3>Add post</h3>
<form method="post">
  <div><label for="title">Title</label></div>
  <div><input id="title" name="title" /></div>
  <div><button type="submit">Add post</button></div>
  <div>{errors !== undefined ? errors.title : ""}</div>
</form>
<a href="/svelte/test">click me</a>
<Inner />
<svelte:head>
  <meta name="viewport" content="" />
</svelte:head>
<h1>{$t("welcome", {username})}</h1>

<p>{$t("message")}<p>

{$t("bye")}~

<h3>{$t("switch-language")}</h3>
<div><a on:click={() => locale.set("en-US")}>{$t("English")}</a></div>
<div><a on:click={() => locale.set("de-DE")}>{$t("German")}</a></div>

<style>
  button {
    border-radius: 4px;
    background-color: #5ca1e1;
    border: none;
    color: #fff;
    display: block;
  }
</style>
