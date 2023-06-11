export default {
  get(request) {
    console.log(request.query.uuid("foo"));
    return "test";
  },
};
