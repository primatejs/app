import React from "react";

export default class extends React.Component {
  render() {
    const {_id, title, text} = this.props.post;
    const {comments} = this.props;

    return (
      <div>
        <h1>{title}</h1>
        <p>{text}</p>
        <a href={`/react/post/edit/${_id}`}>Edit post</a>
        <h2>Comments</h2>
        {comments.map(({text}) => (
          <p>{text}</p>
        ))}
        <a href={`/react/comment/add?post_id=${_id}`}>Add comment</a>
        <form action={`/react/post/delete/${_id}`} method="post">
          <input type="submit" value="Delete post" />
        </form>
      </div>
    )
  }
}
