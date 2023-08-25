<script>
  export let data;
</script>
<svelte:head>
  <meta name="viewport" content="test" />
</svelte:head>
<div>
  {data.hello}
  This is another layout
  <slot></slot>
</div>
