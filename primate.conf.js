import domains from "@primate/domains";
import sessions from "@primate/sessions";
import Session from "./domains/Session.js";

export default {
  modules: [domains(), sessions(Session)],
};
