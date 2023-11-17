import {redirect, error} from "primate";

export default request => {
  const {url: {pathname}, session} = request;

  if (pathname === "/login" || session.all().loggedIn) {
    return true;
  }

  return redirect(`/login?next=${pathname}`);
};
