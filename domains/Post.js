import {Domain} from "@primate/domains";
import Comment from "./Comment.js";

export default class Post extends Domain {
  static fields = {
    title: String,
    text: String,
  };

  get comments() {
    return Comment.find({post_id: this._id});
  }
}

