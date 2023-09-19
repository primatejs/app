import {ReactHead} from "@primate/frontend";

export default function Layout({children, hello}) {
  return <div>
    <ReactHead>
      {
        hello === "world"
        ? <meta name="keywords" content="YO2" />
        : <meta name="keywords" content="YO" />
      }
    </ReactHead>
    T{hello}T
    This is a inner layout
    {children}
    </div>;
}
