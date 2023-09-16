<script>
  export let hello;
</script>
<svelte:head>
  <meta name="viewport" content="test" />
</svelte:head>
<div>
  {hello}
  This is another layout
  <slot></slot>
</div>
