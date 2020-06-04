---
title: '@undataforum/components'
---

A library of React components for the United Nations World Data Forum website.
Built with [Theme UI](https://theme-ui.com).

## Install

In order to install package `@undataforum/components` run

    yarn add @undataforum/components

to add it to your dependencies. Install the following peer dependencies:
`react`, `react-dom` and `theme-ui`.

Import components like this

```jsx
import { PostPreview } from '@undataforum/components';
```

## Explore

You can explore all components at
https://design-system.undataforum.org/components. To explore components locally
run

    yarn workspace docs run dev

## Develop

Work with two terminals. In the first terminal run

    yarn workspace @undataforum/components run watch

and in the second terminal run

    yarn workspace docs run dev

The first command watches for changes in the `@undataforum/components` workspace
and bundles the `@undataforum/components` package whenever it detects changes.
The second command launches Storybook, which uses the local
`@undataforum/components` package as dependency.
