npm run relink &&
rm -rf node_modules/@primate/core node_modules/primate &&
cp -a ../primate/packages/core node_modules/@primate &&
cp -a ../primate/packages/primate node_modules &&
bun --bun x primate build linux &&
bun build build/serve.js --conditions=runtime --compile --outfile primate &&
cp primate /tmp &&
./primate
