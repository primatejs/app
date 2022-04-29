<template>
<form :action="`/vue/comment/add?post_id=${post._id}`" method="post">
  <h1>
    <span>Comment on </span>
    <span>{{post.title}}</span>
  </h1>
  <p>
    <textarea name="text" :value="comment.text"></textarea>
    <div>{{comment.errors.text}}</div>
  </p>
  <input-submit value="Submit comment" />
</form>
</template>
