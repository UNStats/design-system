# @undataforum/assets

A library of design assets implemented as React components for the United
Nations World Data Forum website. Designed by the awesome people at the
[United Nations Graphic Design Unit](https://www.behance.net/unitednations).

## License

This package is not licensed under the MIT license. Read the license information
before installing and using this package.

## Install

In order to install this package, run

```bash
yarn add @undataforum/assets
```

to add it to your dependencies. Install the following peer dependencies: `react`
and `react-dom`.

Import the logo like this:

```jsx
import { Logo } from '@undataforum/assets';
```

## Explore

You can explore all components at https://components.undataforum.org. To explore
components locally run

```bash
yarn workspace docs start
```

## Develop

Work with two terminals. In the first terminal run

```bash
yarn workspace @undataforum/assets run watch
```

and in the second terminal run

```bash
yarn workspace docs start
```

The first command watches for changes in the `@undataforum/assets` workspace and
bundles the `@undataforum/assets` package whenever it detects a change. The
second command launches Storybook, which uses the local `@undataforum/assets`
package as dependency.
