import { view } from "primate";

export default {
  get() {
    const posts = [{
      id: 1,
      title: "First post",
    }];

    return view("post-index.marko", { posts });
  },
};
