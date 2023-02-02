import html from "@primate/html";
import redirect from "@primate/redirect";
import {defined} from "runtime-compat/dyndef";
import Post from "../domains/Post.js";

export default router => {
  router.get("/posts", () => html`<post-index posts="${Post.find()}" />`);

  router.get("/post/view/_id", async ({named}) => {
    const {_id} = named;
    defined(_id);
    const post = await Post.one(_id);
    defined(post);
    return html`<post-view post="${post}" />`;
  });

  router.map("/post/edit/_id", async request => {
    const {_id} = request.named;
    // In case we have an id, we're editing, otherwise adding
    const post = _id === undefined ? new Post() : await Post.one(_id);
    // Make sure that the post exists
    defined(post);
    return {...request, post};
  });

  router.get("/post/edit/_id", ({post}) => html`<post-edit post="${post}" />`);

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
};
