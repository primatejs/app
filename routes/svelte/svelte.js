import {view} from "primate";
//import {writable} from "@primate/liveview";

const posts = [{id: 1, title: "First post"}];

export default {
  get() {
    //const hi = writable({hello: "world"});
    //setTimeout(() => { hi.set({hello: "World"}); }, 5000);
    return view("PostIndex.svelte", {posts});
  },
};
