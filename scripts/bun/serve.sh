npm run relink &&
rm -rf node_modules/primate node_modules/@primate/core &&
cp -a ../primate/packages/primate node_modules &&
cp -a ../primate/packages/core node_modules/@primate/core &&
bun --bun x primate build &&
bun --bun x primate serve
