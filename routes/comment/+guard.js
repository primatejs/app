import {redirect, error} from "primate";

export default request => {
  console.log("GUARD", request);
  const {url: {pathname}, session} = request;

  if (pathname === "/login" || session.all().loggedIn) {
    return true;
  }

  return redirect(`/login?next=${pathname}`);
};
