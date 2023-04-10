<script>
  import Test from "./Test.svelte";

  export let posts;

  let count = 0;

  function handleClick() {
    count = count+1;
  }
</script>
<button on:click={handleClick}>count: {count}</button>
<h1>All posts</h1>
{#each posts as post}
<h2><a href="/post/view/{post.id}">{post.title}</a></h2>
{/each}
<h3><a href="/add">add post</a></h3>
<Test />

<style>
  button {
    border-radius: 4px;
    background-color: #5ca1e1;
    border: none;
    color: #fff;
    display: block;
  }
</style>
