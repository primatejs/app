import {view} from "primate";

export default {
  get() {
    return view("chat.html");
  },
  ws(request) {
    const {limit} = request.query;
    let n = 1;
    return {
      message(payload) {
        if (n > 0 && n < limit) {
          n++;
          return `You wrote ${payload}`;
        }
      },
    };
  },
};
