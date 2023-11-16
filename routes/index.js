import UserSchema from "../stores/User.js";
import PostSchema from "../stores/Post.js";
const sleep = delay => new Promise(resolve => setTimeout(resolve, delay));

export default {
  async get(request) {
    const {User, Post} = request.store;
    await User.schema.create(UserSchema);
    await Post.schema.create(PostSchema);
    console.log(await User.count());
    const u = await User.insert({name: "Donald"});
    console.log(await User.count());
    console.log(u);
    await User.createA();
//    await sleep(20000);
    return "Hello, world!";
  },
};
