<script>
  export let hello, request;
</script>
<svelte:head>
</svelte:head>
<div>
  {request.url.host}
  {hello}
  This is another layout
  <slot></slot>
</div>
