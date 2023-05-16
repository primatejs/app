export default {
  get({guard}) {
    guard.user();
    return "protected";
  },
};
