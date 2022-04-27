import {router, defined, redirect} from "primate";
import react from "primate-react";
import Comment from "../domains/Comment.js";

router.map("/react/comment/add", async request => {
  const {post_id} = request.params;
  defined(post_id);
  const comment = new Comment({post_id});
  const post = await comment.post;
  return {...request, comment, post};
});

router.get("/react/comment/add", ({comment, post}) =>
  react`<CommentAdd comment="${comment}" post="${post}" />`);

router.post("/react/comment/add", async ({comment, post, payload}) =>
  await comment.save(payload)
    ? redirect`/react/post/view/${comment.post_id}`
    : react`<CommentAdd comment="${comment}" post="${post}" />`);

