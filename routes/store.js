export default {
  async get({store}) {
    const {User} = store;

    await User.delete();
    await User.insert({
      date: new Date(),
      age: 200,
      pretty: true,
      money: 9_223_372_036_854_775_807n,
    });

    return {
      users: await User.count(),
    };
  },
};
