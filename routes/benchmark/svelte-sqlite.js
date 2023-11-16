import {view} from "primate";

export default {
  async get(request) {
    const users = await request.store.User.find();
    return view("Users.svelte", {users});
  },
};
