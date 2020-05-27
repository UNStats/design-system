module.exports = {
  '*.js': ['eslint --fix', 'prettier --write', 'prettier --check'],
  '*.{md,mdx,css,yaml,yml}': ['prettier --write', 'prettier --check'],
};
