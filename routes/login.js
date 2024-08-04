import redirect from "primate/handler/redirect";

export default {
  get(request) {
    const { session, query } = request;

    session.create({logged_in: true});

    return redirect(query.get("next") ?? "/");
  },
};
