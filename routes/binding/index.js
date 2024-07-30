import view from "primate/handler/view";

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
