const posts = [{
  id: 1,
  title: "First post",
}];

export default (router, {svelte, html, htmx}) => {
  router.get("/", () => svelte("PostIndex", {posts}));

  router.get("/add", () => htmx("post-add"));

  router.post("/add", ({body}) => html(`
    Adding a post with:
    title ${body.title}
    text: ${body.text}
  `, {adhoc: true}));
};
