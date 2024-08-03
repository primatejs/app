rm -rf node_modules bun.lockb pnpm-lock.yaml deno.lock &&
pnpm install &&
mkdir node_modules/@primate &&
cp -a ../primate/packages/* node_modules/@primate &&
rm -rf node_modules/@primate/*/node_modules &&
rm -rf node_modules/primate &&
cp -a ../primate/packages/primate node_modules &&
rm -rf node_modules/primate/node_modules
