import UserSchema from "../stores/User.js";
import PostSchema from "../stores/Post.js";

export default {
  async get(request) {
    const {User, Post} = request.store;
    await User.schema.create(UserSchema);
    await Post.schema.create(PostSchema);
    await User.insert({name: "Donald"});
    await User.createA();
    return "Hello, world!";
  },
};
