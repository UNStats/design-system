import * as assets from '@undataforum/assets';
import * as components from '@undataforum/components';
import * as themeUi from 'theme-ui';

import DummyLogo from '../../components/dummy-logo';

// Both theme-ui and @undataforum/components contain a Card component.
// Spread components after themeUi to ensure we can use Card from @undataforum/components in examples.
const scope = { DummyLogo, ...themeUi, ...assets, ...components };

export default scope;
