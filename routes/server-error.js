import {error} from "primate";

export default {
  get() {
    return error("Internal Server Error", {status: 500});
  },
};
