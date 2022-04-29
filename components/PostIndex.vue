<template>
  <h1>All posts</h1>
  <div v-for="post in posts">
    <h2><a :href="`/vue/post/view/${post._id}`">{{post.title}}</a></h2>
  </div>
  <h3><a href="/vue/post/edit/">add post</a></h3>
</template>
