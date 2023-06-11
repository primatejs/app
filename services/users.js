/*
 * By adding the directory `services` to build.includes, any files here,
 * including this one, will included in the build and be accessible to any
 * JavaScript component for importing.
 *
 * This is useful if you want to fetch data from Primate (or any other source)
 * dynamically, using `fetch` or any other method.
 *
 * See `components/PostIndex.svelte` for a typical import of such an include.
 */
export default {
  data: {},
};
