<script>
  import users from "../services/users.js";
  import Test from "./Test.svelte";

  export let data;

  let count = 0;

  function handleClick() {
    count = count+1;
  }
</script>
<button on:click={handleClick}>count: {count}</button>
<h1>All posts</h1>
{#each data.posts as post}
<h2><a href="/post/view/{post.id}">{post.title}</a></h2>
{/each}
<h3>Add post</h3>
<form method="post">
  <div><label for="title">Title</label></div>
  <div><input id="title" /></div>
  <div><button type="submit" value="Add post" /></div>
</form>
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
