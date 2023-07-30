export default {
  post(request) {
    const body = request.body.get();

    return `Hello ${body}`;
  },
};
