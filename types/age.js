export default {
  base: "u32",
  validate(value) {
    throw new Error("t");
    return Number(value);
  }
}
