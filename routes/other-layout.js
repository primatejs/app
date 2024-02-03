import {view} from "primate";

export default {
  get() {
    return view("post-add.html", {page: "alternative-app.html"});
  },
};
