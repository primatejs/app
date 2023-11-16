export default {
  async get(request) {
    const {User} = request.store;
    return User.find();
  },
};
