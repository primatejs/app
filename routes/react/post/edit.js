import {view} from "primate";

export default {
  get() {
    return view("react/Edit.jsx");
  },
  post() {
    return view("react/Edit.jsx", {error: "missing data"});
  },
};
