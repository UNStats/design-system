---
title: '@undataforum/assets'
---

A library of design assets implemented as React components for the United
Nations World Data Forum website. Designed by the awesome people at the
[United Nations Graphic Design Unit](https://www.behance.net/unitednations).

## License

This package is not licensed under the MIT license. Read the
[license information](https://github.com/UNDataForum/design-system/blob/master/packages/assets/visual-guidelines.pdf)
before installing and using this package.

## Install

In order to install this package, run

```bash
yarn add @undataforum/assets
```

to add it to your dependencies. Install peer dependencies `react` and
`react-dom`.

Import the logo like this:

```jsx
import { Logo } from '@undataforum/assets';
```

## Docs

Read the docs at https://design-system.undataforum.org/assets. You can run the
docs locally with

    yarn workspace docs run dev

## Contributing

Work with two terminals. In the first terminal run

    yarn workspace @undataforum/assets run watch

and in the second terminal run

    yarn workspace docs run dev

The first command watches for changes in the `@undataforum/assets` workspace and
bundles the `@undataforum/assets` package whenever it detects changes. The
second command launches the docs, which use the local `@undataforum/assets`
package as dependency.
