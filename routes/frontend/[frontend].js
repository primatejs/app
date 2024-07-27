import view from "primate/handlers/view";

export const frontends = {
  angular: "post-index.component.ts",
  eta: "post-index.eta",
  handlebars: "post-index.hbs",
  html: "post-index.html",
  htmx: "post-index.htmx",
  marko: "post-index.marko",
  markdown: "post-index.md",
  react: "PostIndex.jsx",
  solid: "PostIndex.solid",
  svelte: "PostIndex.svelte",
  voby: "PostIndex.voby",
  vue: "PostIndex.vue",
  webc: "post-index.webc",
};

const posts = [{
  id: 1,
  title: "First post",
}];

export default {
  get(request) {
    const frontend = request.path.get("frontend");
    if (frontend in frontends) {
      return view(`frontend/${frontend}/${frontends[frontend]}`, { posts });
    }
  },
};
