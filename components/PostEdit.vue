<template>
  <form method="post">
    <h1>Add/edit post</h1>
    <p>
      <input name="title" :value="post.title" />
      <div>{{post.errors.title}}</div>
    </p>
    <p>
      <textarea name="text" :value="post.text"></textarea>
      <div>{{post.errors.text}}</div>
    </p>
    <InputSubmit value="Save post" />
  </form>
</template>
