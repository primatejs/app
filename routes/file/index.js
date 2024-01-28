import { File } from "rcompat/fs";

export default {
  get() {
    return new File(import.meta.url).directory.join("download.txt");
  },
};
