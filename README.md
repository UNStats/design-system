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

This repository does not use
[Zeit's GitHub integration](https://zeit.co/github). Zeit's GitHub integration
deploys the Storybook from `master` on every push to `master`. This is not the
desired behavior for a component library. The Storybook should only be deployed
after a new version of the component library has been released.

Therefore, this repo works with two GitHub actions:

- On every push to `master` the `release` action creates a pull request with all
  files changed by `yarn changeset version`. This pull request is automatically
  updated on every push to `master`. Whenever you are ready to publish all
  modified packages to to NPM, merge the pull request. This triggers releasing
  all changed packages to NPM.

- On every pull request the `deploy` action deploys the Storybook and adds a
  comment with the deployment URL to the pull request.
