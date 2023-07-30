import {view} from "primate";

export default {
  get(request) {
    return view("test.svelte");
  },
};
