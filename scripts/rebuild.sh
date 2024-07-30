rm -rf node_modules bun.lockb pnpm-lock.yaml deno.lock &&
pnpm install &&
mkdir node_modules/@primate &&
cp -a ../primate/packages/{binding,core,frontend,i18n,native,store,session,types} node_modules/@primate &&
rm -rf node_modules/@primate/{binding,core,frontend,i18n,native,store,session,types}/node_modules &&
rm -rf node_modules/primate &&
cp -a ../primate/packages/primate node_modules &&
rm -rf node_modules/primate/node_modules
