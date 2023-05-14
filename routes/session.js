export default {
  async get(request) {
    const {session} = request;
    await session.create();

    return session.id;
  },
};
