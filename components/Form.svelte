<script>
  const user = {};

  async function register(e) {
    e.preventDefault();
    console.log('register user', user);
  }
</script>

<form on:submit={register} method="post">
  <fieldset>
    <legend>Your Info</legend>
    <div class="field">
      <label for="username">Username (public)</label>
      <input type="text" id="username" name="username" bind:value={user.username} />
    </div>
    <div class="field">
      <label for="password">Password</label>
      <input type="password" name="password" id="password" bind:value={user.password} />
    </div>
    <div class="field">
      <label for="password3">Re-type Password</label>
      <input type="password" name="password2" id="password2" bind:value={user.password2} />
    </div>
  </fieldset>
  <footer>
    <button>Signup</button>
  </footer>
</form>

<style>
</style>
