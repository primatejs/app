<script>
  export let hello, request;
</script>
<div>
  {request.url.host}
  {hello}
  This is another layout 2
  <slot></slot>
</div>
