import { create } from '@storybook/theming';
import pkg from '../../package.json';

const theme = create({
  brandTitle: `United Nations World Data Forum Design Tokens v${pkg.version}`,
  brandUrl: pkg.homepage,
});

export default theme;
