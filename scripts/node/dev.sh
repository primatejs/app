npm run relink &&
rm -rf node_modules/@primate/{frontend,i18n} &&
cp -a ../primate/packages/{frontend,i18n} node_modules/@primate &&
npx primate
