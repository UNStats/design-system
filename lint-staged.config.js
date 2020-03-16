module.exports = {
  '*.{js,jsx}': ['eslint --cache --ext .js,.jsx --fix', 'git add'],
  '*.{md,mdx,css,yaml,yml}': ['prettier --write', 'git add'],
};
