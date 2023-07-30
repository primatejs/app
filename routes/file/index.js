import {Path} from "runtime-compat/fs";

export default {
  get() {
    return new Path(import.meta.url).directory.join("download.txt").file;
  },
};
