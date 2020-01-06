import theme from '@undataforum/preset';
import merge from 'deepmerge';

// eslint-disable-next-line shopify/strict-component-boundaries
import { NewTabLink } from '../src/components';

export default merge(theme, {
  link: {
    external: NewTabLink,
  },
});
