import view from "primate/handler/view";

const backends = [
  "go",
  "python",
  "ruby",
  "typescript",
];

export default {
  get() {
    return view(`backend.html`, { backends });
  },
};
