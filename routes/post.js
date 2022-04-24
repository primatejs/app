import {router, defined, html, redirect} from "primate";
import Post from "../domains/Post.js";

router.alias("_id", "(?<_id>[a-z0-9]+)?");

router.get("/", () => redirect`/posts`);

router.get("/posts", () => html`<post-index posts="${Post.find()}" />`);

router.get("/post/view/_id", async ({path}) => {
  const {_id} = path;
  defined(_id);
  const post = await Post.one(_id);
  defined(post);
  return html`<post-view post="${post}" />`;
});

router.map("/post/edit/_id", async request => {
  const {_id} = request.path;
  // In case we have an id, we're editing, otherwise adding
  const post = _id === undefined ? new Post() : await Post.one(_id);
  // Make sure that the post exists
  defined(post);
  return {...request, post};
});

router.get("/post/edit/_id", ({post}) =>
  html`<post-edit post="${post}" />`);

router.post("/post/edit/_id", async ({post, payload}) =>
  await post.save(payload)
    ? redirect`/post/view/${post._id}`
    : html`<post-edit post="${post}" />`);

router.post("/post/delete/_id", async ({path}) => {
  const {_id} = path;
  defined(_id);
  const post = await Post.one(_id);
  defined(post);

  await post.delete();
  return redirect`/posts`;
});
