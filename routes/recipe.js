import {view, error} from "primate";

const host = "http://localhost:9220";

export default {
  get() {
    return view("Recipe.svelte", {test: 1});
  },
  async post(request) {
    const body = request.body.get();
    try {
      return (await fetch(`${host}/v1/chat/completions`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body),
      })).json();
    } catch (_) {
      return error("error querying local AI backend");
    }
  },
};
