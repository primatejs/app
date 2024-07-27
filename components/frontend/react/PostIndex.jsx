import Head from "@primate/frontend/react/head";
import t from "@primate/i18n/react";
import locale from "@primate/i18n/react/locale";
import { useState } from "react";
import PostLink from "./PostLink.jsx";

export default ({ posts, title, request }) => {
  const [count, setCount] = useState(0);
  return <>
    <Head>
      <title>Primate template app (React)</title>
      <meta name="keywords" content={title} />
    </Head>
    <h1 onClick={() => { console.log("clicked!"); }}>{t("All posts")}</h1>
    {posts.map(post => <PostLink post={post} />)}
    <h3>{t("Counter")}</h3>
    <div>{count}</div>
    <button onClick={(() => setCount(count => count + 1))}>+</button>
    <h3>{t("Switch language")}</h3>
    <div><a onClick={() => locale.set("en-US")}>{t("English")}</a></div>
    <div><a onClick={() => locale.set("de-DE")}>{t("German")}</a></div>
  </>;
}
