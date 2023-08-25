import Head from "./Head.jsx";
import {useState} from "react";

export default function ({data: {posts, title}}) {
  const [a, setA] = useState(false);

  return <>
    <h1 onClick={() => {console.log("HI!")}}>All posts</h1>
    <Head>
      <title>hi2App template app</title>
      <meta keywords={title} />
    </Head>
    {posts.map(({id, title}) =>
      <h2><a href={`/react/post/view/${id}`}>{title}</a></h2>
    )}
    <h3><a href="/react/post/edit/">add post</a></h3>
  </>;
};
