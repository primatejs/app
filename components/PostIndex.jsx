import React from "react";

export default class extends React.Component {
  render() {
    const {posts} = this.props;

    return (<>
      <h1>All posts</h1>
      {posts.map(({id, title}) => (
        <h2><a href={`/react/post/view/${id}`}>{title}</a></h2>
      ))}
      <h3><a href="/react/post/edit/">add post</a></h3>
    </>);
  }
}
