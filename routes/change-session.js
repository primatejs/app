export default {
  async get(request) {
    const {session} = request;
    session.set("test", {some: "value"});

    return "hi";
  },
};
