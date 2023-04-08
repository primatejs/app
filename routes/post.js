const posts = [{
  id: 1,
  title: "First post",
}];

export default (router, {svelte, html, htmx}) => {
  router.get("/", () => svelte("PostIndex", {posts}));

  router.get("/add", () => htmx("post-add"));

  router.post("/add", ({body}) => html(`
    <h2>Adding a post with:</h2>
    <div><strong>Title</strong> ${body.title}</div>
    <div><strong>Text</strong> ${body.text}</div>
  `, {adhoc: true}));
};
