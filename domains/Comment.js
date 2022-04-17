import {Domain} from "primate";
import Post from "./Post.js";

export default class Comment extends Domain {
  static get fields() {
    return {
      "text": String,
      "post_id": Post,
    };
  }
}
