import {id, date, u8, string} from "@primate/types";

export const actions = (client, store) => {
  return {
    customAction() {
      console.log("client:", client);
      console.log("store:", store);
    },
  };
};

export default {
  id,
  name: string,
  date,
  email: string,
  age: u8,
};
