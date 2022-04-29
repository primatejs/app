import {router, defined, redirect} from "primate";
import vue from "primate-vue";
import Post from "../domains/Post.js";

router.get("/vue", () => redirect`/vue/posts`);

router.get("/vue/posts", () => vue`<PostIndex posts="${Post.find()}" />`);

router.get("/vue/post/view/_id", async ({path}) => {
  const {_id} = path;
  defined(_id);
  const post = await Post.one(_id);
  defined(post);
  const comments = await post.comments;
  return vue`<PostView post="${post}" comments="${comments}" />`;
});

router.map("/vue/post/edit/_id", async request => {
  const {_id} = request.path;
  // In case we have an id, we're editing, otherwise adding
  const post = _id === undefined ? new Post() : await Post.one(_id);
  // Make sure that the post exists
  defined(post);
  return {...request, post};
});

router.get("/vue/post/edit/_id", ({post}) =>
  vue`<PostEdit post="${post}" />`);

router.post("/vue/post/edit/_id", async ({post, payload}) =>
  await post.save(payload)
    ? redirect`/vue/post/view/${post._id}`
    : vue`<PostEdit post="${post}" />`);

router.post("/vue/post/delete/_id", async ({path}) => {
  const {_id} = path;
  defined(_id);
  const post = await Post.one(_id);
  defined(post);

  await post.delete();
  return redirect`/vue/posts`;
});
