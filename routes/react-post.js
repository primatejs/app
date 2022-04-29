import {router, redirect, defined} from "primate";
import react from "primate-react";
import Post from "../domains/Post.js";

router.get("/react", () => redirect`/react/posts`);

router.get("/react/posts", () => react`<PostIndex posts="${Post.find()}" />`);

router.get("/react/post/view/_id", async ({path}) => {
  const {_id} = path;
  defined(_id);
  const post = await Post.one(_id);
  defined(post);
  const comments = await post.comments;
  return react`<PostView post="${post}" comments="${comments}" />`;
});

router.map("/react/post/edit/_id", async request => {
  const {_id} = request.path;
  // In case we have an id, we're editing, otherwise adding
  const post = _id === undefined ? new Post() : await Post.one(_id);
  // Make sure that the post exists
  defined(post);
  return {...request, post};
});

router.get("/react/post/edit/_id", ({post}) =>
  react`<PostEdit post="${post}" />`);

router.post("/react/post/edit/_id", async ({post, payload}) =>
  await post.save(payload)
    ? redirect`/react/post/view/${post._id}`
    : react`<PostEdit post="${post}" />`);

router.post("/react/post/delete/_id", async ({path}) => {
  const {_id} = path;
  defined(_id);
  const post = await Post.one(_id);
  defined(post);

  await post.delete();
  return redirect`/react/posts`;
});
