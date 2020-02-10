# @undataforum/components

A library of React components for the United Nations World Data Forum website.
Built with [Theme UI](https://theme-ui.com).

## Install

In order to install package `@undataforum/components` run

```bash
yarn add @undataforum/components
```

to add it to your dependencies. Install the following peer dependencies:
`react`, `react-dom` and `theme-ui`.

Import components like this

```jsx
import { Header, PostPreview, ProfilePreview } from '@undataforum/components';
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
yarn workspace @undataforum/components run watch
```

and in the second terminal run

```bash
yarn workspace docs start
```

The first command watches for changes in the `@undataforum/components` workspace
and bundles the `@undataforum/components` package whenever it detects a change.
The second command launches Storybook, which uses the local
`@undataforum/components` package as dependency.
