## Component props

| Prop name | Type                                         | Required | Default          |
| :-------- | :------------------------------------------- | :------- | :--------------- |
| `logo`    | `func`                                       | no       |                  |
| `title`   | `string`                                     | no       |                  |
| `social`  | `func`                                       | no       |                  |
| `links`   | `arrayOf(shape(text: string, href: string))` | yes      |                  |
| `variant` | `colorVariantType`                           | no       | `primaryInverse` |

## Styled System props

Supports all [Styled System](https://styled-system.com/) props that [Box](https://rebassjs.org/box) supports. See [here](https://github.com/rebassjs/rebass/tree/master/packages/reflexbox#styled-system-props).

## Theme defaults

| Prop name         | Value            |
| :---------------- | :--------------- |
| `colors.variants` | See `colors.js`. |
