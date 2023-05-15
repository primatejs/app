import {view} from "primate";

export default {
  get() {
    return view("post-add.html", {layout: "index2.html"});
  },
};
