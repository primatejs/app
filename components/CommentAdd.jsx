import React from "react";
import InputSubmit from "./InputSubmit.jsx";

export default class extends React.Component {
  render() {
    const {errors, text} = this.props.comment;
    const {post} = this.props;

    return (
      <form action={`?post_id=${post._id}`} method="post">
        <h1>
          <span>Comment on {post.title}</span>
        </h1>
        <p>
          <textarea name="text" value={text}></textarea>
          <div>{errors.text}</div>
        </p>
        <InputSubmit value="Submit comment" />
      </form>
    )
  }
}
