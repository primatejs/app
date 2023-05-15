const uuid = /^[^\W_]{8}-[^\W_]{4}-[^\W_]{4}-[^\W_]{4}-[^\W_]{12}$/u;

export default value => uuid.test(value);
