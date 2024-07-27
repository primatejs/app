import view from "primate/handlers/view";

const bindings = [
  "go",
  "python",
  "ruby",
  "typescript",
];

export default {
  get() {
    return view(`binding.html`, { bindings });
  },
};
