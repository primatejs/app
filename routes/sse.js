import { sse } from "primate";

const passed = start_time => Math.floor((Date.now() - start_time) / 1000);

export default {
  get() {
    let interval;
    let start_time = Date.now();

    return sse({
      open(source) {
        // connection opens
        interval = globalThis.setInterval(() => {
          source.send("passed", passed(start_time));
        }, 5000);
      },
      close() {
        // connection closes
        globalThis.clearInterval(interval);
      },
    });
  },
};
