# @undataforum/design-system

This monorepo contains the design system for United Nations World Data Forum
websites:

- [@undataforum/assets](https://github.com/UNDataForum/components/tree/master/packages/components):
  requires users to sign a waiver of liability.
- [@undataforum/components](https://github.com/UNDataForum/components/tree/master/packages/components):
  licensed under the
  [MIT license](https://github.com/UNDataForum/design-system/blob/master/packages/components/LICENSE.md).
- [@undataforum/preset](https://github.com/UNDataForum/components/tree/master/packages/preset):
  licensed under the
  [MIT license](https://github.com/UNDataForum/design-system/blob/master/packages/preset/LICENSE.md).

## Publishing packages to NPM

On every push to `master` the `release` GitHub action creates a pull request
with all files changed by `yarn changeset version`. This pull request is
automatically updated on every push to master. Whenever you are ready to publish
to NPM, merge the pull request and run `yarn run release` manually on the merged
commit.
