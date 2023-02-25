import sessions from "@primate/sessions";
import Session from "./domains/Session.js";

export default {
  modules: [sessions(Session)],
};
