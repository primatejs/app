import redirect from "primate/handler/redirect";

export default request => {
  const { url: { pathname }, session } = request;

  if (request.session.get("logged_in")) {
    return true;
  }

  return redirect(`/login?next=${pathname}`);
};
