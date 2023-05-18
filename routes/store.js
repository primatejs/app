export default {
  async get(request) {
    const {User} = request.store;
    request.guard.user();
    const user = await User.insert({created: new Date(), age: 130});

    return {
      user: await User.new(),
      users: await User.find(),
    };
  },
};
