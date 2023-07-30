import {primary, boolean, date, u8, i64, string} from "@primate/types";

export const actions = (client, store) => {
  return {
    create() {
      store.config.driver.create("user", {
        id: "primary",
        name: "string",
        date: "datetime",
        email: "string",
        age: "u8",
        pretty: "boolean",
        money: "i64",
      });
    },
    customAction() {
      console.log("client:", client);
      console.log("store:", store);
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
