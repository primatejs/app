export default {
  get(request) {
    return request.session.id;
  },
};
