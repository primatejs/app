export default ({ post: { id, title } }) =>
  <h2><a href={`/react/post/${id}`}>{title}</a></h2>;
