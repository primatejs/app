import { view } from "primate";

const posts = [{
  id: 1,
  title: "First post",
}, {id: 2, "title": "Second post"}];

export default {
  get() {
    return view("post-index.webc", { posts });
  }
}
