export default {
  async get(request) {
    const {session} = request;
    await session.create({loggedIn: true});

    return session.id;
  },
};
