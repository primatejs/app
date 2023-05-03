export default {
  async get(request) {
    const {store: {User}} = request;
    await User.insert();

    return {
      user: await User.new(),
      users: await User.find(),
    };
  },
};
