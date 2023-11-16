import { writable } from "svelte/store";
import { getContext } from "svelte";

export default writable((key, placeholders) => {
  getContext("app");
  console.log(key, placeholders);
  return "YO2";
});
