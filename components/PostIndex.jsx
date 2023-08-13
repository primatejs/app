/*export default class extends React.Component {
  render() {
    const {posts} = this.props.data;

    return (<>
      <h1 onClick={() => {console.log("HI!")}}>All posts</h1>
      {posts.map(({id, title}) => (
        <h2><a href={`/react/post/view/${id}`}>{title}</a></h2>
      ))}
      <h3><a href="/react/post/edit/">add post</a></h3>
    </>);
  }
}*/

export default ({data: {posts}}) =>
  (<>
    <h1 onClick={() => {console.log("HI!")}}>All posts</h1>
    {posts.map(({id, title}) => (
      <h2><a href={`/react/post/view/${id}`}>{title}</a></h2>
    ))}
    <h3><a href="/react/post/edit/">add post</a></h3>
  </>);
