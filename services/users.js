/*
 * By adding the directory `services` to build.includes in `primate.config.js`,
 * any files here, including this one, will be included in the build and be
 * available to any JavaScript component for import.
 *
 * This is useful if you want to fetch data from Primate (or any other source)
 * dynamically, using `fetch` or any other http client.
 *
 * See `components/svelte/PostIndex.svelte` for a typical import of such an
 * include.
 */
export default {
  data: {},
};
