const uuid = /^[^\W_]{8}-[^\W_]{4}-[^\W_]{4}-[^\W_]{4}-[^\W_]{12}$/u;

export default {
  base: "string",
  validate(value) {
    if (uuid.test(value)) {
      return value;
    }

    throw new Error(`${JSON.stringify(value)} is not a valid UUID`);
  }
}
