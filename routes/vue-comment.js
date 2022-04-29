import {router, defined, redirect} from "primate";
import vue from "primate-vue";
import Comment from "../domains/Comment.js";

router.map("/vue/comment/add", async request => {
  const {post_id} = request.params;
  defined(post_id);
  const comment = new Comment({post_id});
  const post = await comment.post;
  return {...request, comment, post};
});

router.get("/vue/comment/add", ({comment, post}) =>
  vue`<CommentAdd comment="${comment}" post="${post}" />`);

router.post("/vue/comment/add", async ({comment, post, payload}) =>
  await comment.save(payload)
    ? redirect`/vue/post/view/${comment.post_id}`
    : vue`<CommentAdd comment="${comment}" post="${post}" />`);

