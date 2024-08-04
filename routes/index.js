import UserSchema from "../stores/User.js";
import PostSchema from "../stores/Post.js";

export default {
  async get(request) {
    const { User, Post } = request.store;
    await User.schema.create(UserSchema);
    await Post.schema.create(PostSchema);
    await User.insert({ name: "Ryan", age: 24 });
    await User.createA();
    await User.delete({ name: "Ryan"})
    const { id } = await User.insert({ name: "Donald", age: 24 });
    await User.update({ id }, { age: 26 });
    return await User.find(); //"Hello, world!");
  },
};
