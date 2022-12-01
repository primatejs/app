import {router, html, redirect} from "primate";
import {defined} from "dyndef";
import Comment from "../domains/Comment.js";

router.map("/html/comment/add", request => {
  const {post_id} = request.params;
  defined(post_id);
  const comment = new Comment({post_id});
  return {...request, comment};
});

router.get("/html/comment/add", ({comment}) =>
  html`<comment-add comment="${comment}" />`);

router.post("/html/comment/add", async ({comment, payload}) =>
  await comment.save(payload)
    ? redirect`/html/post/view/${comment.post_id}`
    : html`<comment-add comment="${comment}" />`);

