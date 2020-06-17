---
title: '@undataforum/preset'
---

Package
[`@undataforum/preset`](https://github.com/UNDataForum/design-system/tree/master/packages/preset)
is a [Theme UI](https://theme-ui.com/) preset based on
[@theme-ui/preset-base](https://github.com/system-ui/theme-ui/tree/master/packages/preset-base).

## Variants

Variants for [Theme UI components](https://theme-ui.com/components):

### Badge

Variants for [Badge](https://theme-ui.com/components/badge/) are defined under
the `badges` key:

| Variant     | Default | Description               |
| :---------- | :------ | :------------------------ |
| `primary`   | ✓       | Badge in primary color.   |
| `secondary` |         | Badge in secondary color. |

### Button

Variants for [Button](https://theme-ui.com/components/button) are defined under
the `buttons` key:

| Variant             | Default | Description                        |
| :------------------ | :------ | :--------------------------------- |
| `default`           |         | Shared button styles.              |
| `primary`           | ✓       | Button in primary color.           |
| `secondary`         |         | Button in secondary color.         |
| `outline.default`   |         | Shared outline button styles.      |
| `outline.primary`   |         | Outline button in primary color.   |
| `outline.secondary` |         | Outline button in secondary color. |

### Container

Variants for [Container](https://theme-ui.com/components/container) are defined
under the `layout` key:

| Variant     | Default | Description                    |
| :---------- | :------ | :----------------------------- |
| `container` | ✓       | Default width.                 |
| `narrow`    |         | Reading friendly narrow width. |
| `wide`      |         | Wide width.                    |

## Customizations

This preset contains the following customizations of components from
[`@undataforum/components`](/components):

- For [Header](/components/header) under the `header` key.

## Contributing

Work with two terminals. In the first terminal run

    yarn workspace @undataforum/preset run watch

and in the second terminal run

    yarn workspace docs run dev

The first command watches for changes in the `@undataforum/preset` workspace and
bundles the `@undataforum/prest` package whenever it detects changes. The second
command launches the docs, which use the local `@undataforum/preset` package as
dependency.
