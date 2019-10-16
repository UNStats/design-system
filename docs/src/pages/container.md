## Component props

| Prop name  | Type                                   | Required | Default   |
| :--------- | :------------------------------------- | :------- | :-------- |
| `children` | `node`                                 | yes      |           |
| `maxWidth` | `oneOf(['narrow', 'default', 'wide'])` | no       | `default` |

## Styled System props

Supports all [Styled System](https://styled-system.com/) props that [Box](https://rebassjs.org/box) supports. See [here](https://github.com/rebassjs/rebass/tree/master/packages/reflexbox#styled-system-props).

The following Styled System props are used by Container:

| Prop name | Default     | Overridable |
| :-------- | :---------- | :---------- |
| `mx`      | `auto`      | no          |
| `px`      | `[2, 3, 0]` | yes         |

## Theme defaults

| Prop name             | Value   |
| :-------------------- | :------ |
| `sizes.width.narrow`  | `48rem` |
| `sizes.width.default` | `64rem` |
| `sizes.width.wide`    | `96rem` |
