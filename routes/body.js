export default {
  post(request) {
    const body = request.body.all();
    console.log(request.body.get("T"))
//    return `Hello ${body}`;
    return "test";
  },
};
