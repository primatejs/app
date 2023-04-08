const posts = [{
  id: 1,
  title: "First post",
}];

export default (router, {svelte}) => {
  router.get("/", () => svelte("PostIndex", {posts}));
};
