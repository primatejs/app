import {router, defined, html, redirect} from "primate";
import Comment from "../domains/Comment.js";

router.map("/comment/add", request => {
  const {post_id} = request.params;
  defined(post_id);
  const comment = new Comment({post_id});
  return {...request, comment};
});

router.get("/comment/add", ({comment}) =>
  html`<comment-add comment="${comment}" />`);

router.post("/comment/add", async ({comment, payload}) =>
  await comment.save(payload)
    ? redirect`/post/view/${comment.post_id}`
    : html`<comment-add comment="${comment}" />`);

