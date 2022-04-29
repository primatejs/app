<template>
<div>
  <h1>{{post.title}}</h1>
  <p>{{post.text}}</p>
  <a :href="`/vue/post/edit/${post._id}`">Edit post</a>
  <h2>Comments</h2>
  <div v-for="comment in comments">
    <p>{{comment.text}}</p>
  </div>
  <a :href="`/vue/comment/add?post_id=${post._id}`">Add comment</a>
  <form :action="`/vue/post/delete/${post._id}`" method="post">
    <input type="submit" value="Delete post" />
  </form>
</div>
</template>
