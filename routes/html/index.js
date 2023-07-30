import {view} from "primate";

export default {
  get() {
    throw new Error("test");
    return view("post-add.html");
  },
};
