import view from "primate/handlers/view";
import { frontends } from "./[frontend].js";

export default {
  get() {
    return view(`frontend/index.html`, { frontends: Object.keys(frontends) });
  },
};
