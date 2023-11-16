import {redirect} from "primate";

export default {
  async get(request) {
    const {session, query} = request;

    await session.create({loggedIn: true});
    console.log(session);
    console.log(session.all())

    return redirect(query.get("next") ?? "/");
  },
};
