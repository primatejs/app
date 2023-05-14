export default {
  async get(request) {
    const {User} = request.store;
    await User.insert({created: new Date(), age: 20});

    return {
      user: await User.new(),
      users: await User.find(),
    };
  },
};
