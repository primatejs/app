import {Domain} from "primate";
import Comment from "./Comment.js";

export default class Post extends Domain {
  static get fields() {
    return {
      "title": String,
      "text": String,
    };
  }

  get comments() {
    return Comment.find({"post_id": this._id});
  }
}

