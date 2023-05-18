export default {
  async get({guard, store}) {
    guard.user();
    const {User} = store;
    await User.insert({created: new Date(), age: 30});

    return {
      user: await User.new(),
      users: await User.find(),
    };
  },
};
