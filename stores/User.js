import {primary, boolean, date, u8, i64, string} from "@primate/types";

export const actions = store => {
  return {
    async createA() {
    },
    customAction() {
    },
  };
};

export default {
  id: primary,
  name: string,
  date,
  email: string,
  age: u8,
  pretty: boolean,
  money: i64,
};
