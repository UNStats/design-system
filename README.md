# @undataforum/components

This monorepo contains reusable React components for United Nations World Data Forum websites. It contains the following packages:

- [@undataforum/components](https://github.com/UNDataForum/components/tree/master/packages/components): licensed under the [MIT license](https://choosealicense.com/licenses/mit/).
- [@undataforum/tokens](https://github.com/UNDataForum/components/tree/master/packages/components): requires users to sign a waiver of liability.

Check the README files in each package for more details.

## Publish Packages

Packages are published with [Lerna](https://lerna.js.org/) using [Conventional Commits](https://www.conventionalcommits.org/) and independent versioning. The publish configuration is in [`lerna.json`](https://github.com/UNDataForum/components/blob/master/lerna.json).

Prior to publishing make sure that your `GH_TOKEN` environment variable is configured. Then run

```
npx lerna publish
```
