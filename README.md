# @undataforum/components

Reusable React components for the new UN World Data Forum Website.

## Explore

Launch the [Storybook](https://storybook.js.org/) on your machine with

```bash
yarn start
```

and explore all components in your browser at http://localhost:9009/. You can also look at the Storybook of the latest release of this component library at https://components.undataforum.org.

## Install

Run

```bash
yarn add @undataforum/components
```

to add package [@undataforum/components](https://github.com/UNDataForum/components) to your dependencies. You can then import components like this

```jsx
import { Provider, Header } from "@undataforum/components";
```

## License

This project is licensed under the [MIT license](https://choosealicense.com/licenses/mit/). The United Nations World Data Forum logo is not part of this license. The [Header component](https://github.com/UNDataForum/components/blob/master/src/components/Header/Header.jsx) contains additional information on licensing the logo.

## Render Props

A common use of [render props](https://reactjs.org/docs/render-props.html) in this library is the `Anchor` prop. Components with links normally simply use `<a>`. In some contexts like [Gatsby](https://www.gatsbyjs.org/) or apps using [React Router](https://reacttraining.com/react-router/) or [Reach Router](https://reach.tech/router), you may want to use a custom component for links. The `Anchor` prop allows you provide such custom component.

The default for `Anchor` is always `DefaultAnchor`, which is basically this:

```jsx
({ children, children }) => <a href={href}>{children}</a>;
```

Notice that the signature of any `Anchor` render prop must be `children` and `href`. Alternatively, there is also `OpenInNewTabAnchor` with the same singature, but which opens link targets in a new tab.

Within Gatsby, you normally use its `Link` component for internal links. Since the `Link` component has a different signature, you need to map it to the required signature

```jsx
({ children, href }) => <Link to={href}>{children}</Link>;
```

and then provide this derived static funcitonal component to the `Anchor` prop.

## Release and Deploy

Releases are done with [Zeit release](https://github.com/zeit/release), which needs to be installed globally. You need to run

    release <type>

as described in the documentation of Zeit release.

This triggers a push to master that triggers a [Travis CI](https://travis-ci.com/) build. This build

- runs `npm run snapshot` and deploys the Storybook to [GitHub Pages](https://pages.github.com/) and
- runs `npm run build` and publishes package `@undataforum/components` to [npm](https://www.npmjs.com/).
