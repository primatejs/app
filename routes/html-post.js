import {router, html, redirect} from "primate";
import {defined} from "dyndef";
import Post from "../domains/Post.js";

router.get("/html", () => redirect`/html/posts`);

router.get("/html/posts", () => html`<post-index posts="${Post.find()}" />`);

router.get("/html/post/view/_id", async ({path}) => {
  const {_id} = path;
  defined(_id);
  const post = await Post.one(_id);
  defined(post);
  return html`<post-view post="${post}" />`;
});

router.map("/html/post/edit/_id", async request => {
  const {_id} = request.path;
  // In case we have an id, we're editing, otherwise adding
  const post = _id === undefined ? new Post() : await Post.one(_id);
  // Make sure that the post exists
  defined(post);
  return {...request, post};
});

router.get("/html/post/edit/_id", ({post}) =>
  html`<post-edit post="${post}" />`);

router.post("/html/post/edit/_id", async ({post, payload}) =>
  await post.save(payload)
    ? redirect`/html/post/view/${post._id}`
    : html`<post-edit post="${post}" />`);

router.post("/html/post/delete/_id", async ({path}) => {
  const {_id} = path;
  defined(_id);
  const post = await Post.one(_id);
  defined(post);

  await post.delete();
  return redirect`/html/posts`;
});
