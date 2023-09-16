<script>
  import test from "./test.js";
  import Test from "../Test.svelte";

  export let posts, errors;

  let count = 0;

  function handleClick() {
    count = count+1;
  }
</script>
T<test />T
<button on:click={handleClick}>count: {count}</button>
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
<Test />
<svelte:head>
  <meta name="viewport" content="" />
</svelte:head>

<style>
  button {
    border-radius: 4px;
    background-color: #5ca1e1;
    border: none;
    color: #fff;
    display: block;
  }
</style>
