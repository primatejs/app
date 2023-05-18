import {Logger} from "primate";
const {mark} = Logger;

const toss = message => {
  throw new Error(message);
};

const uuid = /^[^\W_]{8}-[^\W_]{4}-[^\W_]{4}-[^\W_]{4}-[^\W_]{12}$/u;

export default value => uuid.test(value) ||
  toss(mark("% is not a valid UUID", JSON.stringify(value)));
