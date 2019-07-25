# @undataforum/components

This monorepo contains reusable React components for United Nations World Data Forum websites. It contains the following packages:

- [@undataforum/components](https://github.com/UNDataForum/components/tree/master/packages/components): licensed under the [MIT license](https://choosealicense.com/licenses/mit/).
- [@undataforum/tokens](https://github.com/UNDataForum/components/tree/master/packages/components): requires users to sign a waiver of liability.

Check the README files in each package for more details.

## Publishing NPM packages

NPM packages are published to the [GitHub Package Registry](https://github.com/features/package-registry) and no longer to https://www.npmjs.com/. You can explore packages at https://github.com/UNDataForum/components/packages.

Packages are published with [Lerna](https://lerna.js.org/) using [Conventional Commits](https://www.conventionalcommits.org/) and independent versioning. The publish configuration is in [`lerna.json`](https://github.com/UNDataForum/components/blob/master/lerna.json).

In order to publish packages to the GitHub package registry, you need to configure the following GitHub tokens:

- A token with `public_repo` permission assigned to environment variable `GH_TOKEN` in your `~/.bashrc`. This allows Lerna to add version tags when publishing a package.
- A token with permissions `read:packages` and `write:packages`. This token needs to be added to `~/.npmrc` as described [here](https://help.github.com/en/articles/configuring-npm-for-use-with-github-package-registry#authenticating-to-github-package-registry).

Then you can run

```
npx lerna publish
```

to have Lerna publish all packages.
