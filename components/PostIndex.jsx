import { useState } from "react";
import { Head } from "@primate/frontend/react";
import t from "@primate/i18n/react";
import { locale } from "@primate/i18n/react";
import Test from "./Test.jsx";

export default function ({posts, title, request}) {
  const [a, setA] = useState(false);

  return <>
    <div onClick={() => locale.set("en")}>set english</div>
    <div onClick={() => locale.set("de")}>set german</div>
    <div>{t("bye")}</div>
    <div>{t("ph", {here: t("bye")})}</div>
    <Test />
    {request.url.host}
    <h1 onClick={() => {console.log("clicked!")}}>All posts</h1>
    <Head>
      <title>hi2App template app</title>
      <meta name="keywords" content={title} />
    </Head>
    {posts.map(({id, title}) =>
      <h2><a href={`/react/post/view/${id}`}>{title}</a></h2>
    )}
    <h3><a href="/react/post/edit/">add post</a></h3>
    <h1>{t("welcome", {username: "foo"})}</h1>

    <p>{t("message")}</p>

    {t("bye")}~

    <h3>{t("switch-language")}</h3>
    <div><a onClick={() => locale.set("en-US")}>{t("English")}</a></div>
    <div><a onClick={() => locale.set("de-DE")}>{t("German")}</a></div>
  </>;
};
