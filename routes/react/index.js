import {view} from "primate";
//import {writable} from "@primate/liveview";
//let running = false; const a = 1000; const b = 3000;
const posts = [{id: 1, title: "First post"}];
export default {
  get(request) {
    console.log(request.session.all());
    return view("PostIndex.jsx", {posts, title: "Hi title"});
    /*const hi = writable({hello: "HI"});
    setTimeout(() => {
      if (!running) {
        running = true;
        let count = 0;
        setInterval(() => {
          hi.set({hello: `THESKILL ${count++}`});
        }, a);
      }
    }, b);*/
    return view("PostIndex.jsx", {posts/*, hi*/});
  },
};
