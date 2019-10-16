## Component props

| Prop name  | Type               | Required | Default   |
| :--------- | :----------------- | :------- | :-------- |
| `children` | `node`             | yes      |           |
| `href`     | `string`           | yes      |           |
| `variant`  | `colorVariantType` | no       | `primary` |

## Styled System props

Supports all [Styled System](https://styled-system.com/) props that [Link](https://rebassjs.org/link) supports. See [here](https://github.com/rebassjs/rebass/tree/master/packages/reflexbox#styled-system-props).

## Theme defaults

| Prop name         | Value            |
| :---------------- | :--------------- |
| `colors.variants` | See `colors.js`. |
| `links.internal`  | `a`              |
| `links.external`  | `NewTabLink`     |
