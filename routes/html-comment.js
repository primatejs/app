import html from "@primate/html";
import redirect from "@primate/redirect";
import {defined} from "runtime-compat/dyndef";
import Comment from "../domains/Comment.js";

export default router => {
  router.map("/comment/add", request => {
    const {post_id} = request.params;
    defined(post_id);
    const comment = new Comment({post_id});
    return {...request, comment};
  });

  router.get("/comment/add", ({comment}) =>
    html`<comment-add comment="${comment}" />`);

  router.post("/comment/add", async ({comment, body}) =>
    await comment.save(body)
      ? redirect`/post/view/${comment.post_id}`
      : html`<comment-add comment="${comment}" />`);
};

