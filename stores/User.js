import boolean from "@primate/types/boolean";
import date from "@primate/types/date";
import i64 from "@primate/types/i64";
import primary from "@primate/types/primary";
import string from "@primate/types/string";
import u8 from "@primate/types/u8";

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
