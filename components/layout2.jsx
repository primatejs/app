import {Head} from "@primate/frontend/react";

export default function Layout({children, hello}) {
  return <div>
    <Head>
      {
        hello === "world"
        ? <meta name="keywords" content="YO2" />
        : <meta name="keywords" content="YO" />
      }
    </Head>
    T{hello}T
    This is a inner layout
    {children}
    </div>;
}
