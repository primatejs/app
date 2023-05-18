import {redirect} from "primate";

export default request => {
  if (request.session.get().loggedIn) {
    return true;
  }

  return redirect(`/login?next=${request.url.pathname}`);
};
