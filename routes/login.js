import {redirect} from "primate";

export default {
  async get(request) {
    const {session, query} = request;

    await session.create({loggedIn: true});

    return redirect(query.get("next") ?? "/");
  },
};
