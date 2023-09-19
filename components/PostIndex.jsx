import {useState} from "react";
import {ReactHead} from "@primate/frontend";

export default function ({posts, title}) {
  const [a, setA] = useState(false);

  return <>
    <h1 onClick={() => {console.log("HI!")}}>All posts</h1>
    <ReactHead>
      <title>hi2App template app</title>
      <meta name="keywords" content={title} />
    </ReactHead>
    {posts.map(({id, title}) =>
      <h2><a href={`/react/post/view/${id}`}>{title}</a></h2>
    )}
    <h3><a href="/react/post/edit/">add post</a></h3>
  </>;
};
