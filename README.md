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

## Documentation

A common use of [render props](https://reactjs.org/docs/render-props.html) in this library is the `anchor` prop. When components have links normally they use the [HTML `<a>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a). In some contexts like [Gatsby](https://www.gatsbyjs.org/) or, more generally, [React Router](https://reacttraining.com/react-router/) you may want to use a specific component for links. The `anchor` prop allows you to determine, which link component is used for links.

The default `anchor` render prop is always

```jsx
({ href, children }) => <a href={href}>{children}</a>;
```

which means that a component would use the HTML `<a>` element for links with the link target being the current browser tab. If you want links to open in a new tab, you should provide this `anchor` prop:

```jsx
({ href, children }) => (
  <a href={href} target="_blank">
    {children}
  </a>
);
```

Within a Gatsby website for internal links you should provide this `anchor` prop using Gatsby's `Link` component:

```jsx
({ href, children }) => <Link to={href}>{children}</Link>;
```

The render prop pattern gives you the flexibility to use components in different contexts.
