import { ws } from "primate";

export default {
  get(request) {
    const limit = request.query.get("limit");
    let n = 1;
    return ws({
      open() {
        console.log("opened!");
      },
      message(socket, message) {
        if (n > 0 && n < limit) {
          n++;
          socket.send(`You wrote ${message}`);
        }
      },
    });
  },
};
