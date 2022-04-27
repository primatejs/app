import React from "react";
import InputSubmit from "./InputSubmit.jsx";

export default class extends React.Component {
  render() {
    const {title, errors, text} = this.props.post;

    return (
      <form method="post">
        <h1>Add/edit post</h1>
        <p>
          <input name="title" value={title} />
          <div>{errors.title}</div>
        </p>
        <p>
          <textarea name="text" value={text}></textarea>
          <div>{errors.text}</div>
        </p>
        <InputSubmit value="Save post" />
      </form>
    )
  }
}
