import {view} from "primate";

const form = data => view("svelte/PostIndex.svelte", data);

export default {
  async get(request) {
    return form({posts: await request.store.Post.find()});
  },
  async post(request) {
    const {Post} = request.store;

    try {
      await Post.insert(request.body);
      return form({posts: await Post.find()});
    } catch ({errors}) {
      return form({posts: await Post.find(), errors});
    }
  },
};
