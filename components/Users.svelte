<script>
  export let users = [];
</script>
{#each users as user}
  <div>{user.name}</div>
{/each}
