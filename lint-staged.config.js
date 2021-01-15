const micromatch = require('micromatch');
const prettier = require('prettier');

// https://coding.maier.tech/chunks/optimizing-lint-staged-config-js-for-prettier/

const prettierSupportedExtensions = prettier
  .getSupportInfo()
  .languages.map(({ extensions }) => extensions)
  .flat();

const addQuotes = (a) => `"${a}"`;

module.exports = (allStagedFiles) => {
  const eslintFiles = micromatch(allStagedFiles, ['**/*.js'], { dot: true });
  const prettierFiles = micromatch(
    allStagedFiles,
    prettierSupportedExtensions.map((extension) => `**/*${extension}`),
    { dot: true }
  );
  const linters = [];
  if (eslintFiles.length > 0)
    linters.push(`eslint --fix ${eslintFiles.join(' ')}`);
  if (prettierFiles.length > 0)
    linters.push(`prettier --write ${prettierFiles.map(addQuotes).join(' ')}`);
  return linters;
};
