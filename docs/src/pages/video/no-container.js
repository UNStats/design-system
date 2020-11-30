import React from 'react';
import { ThemeProvider } from 'theme-ui';
import preset from '@undataforum/preset';
import { Video } from '@undataforum/components';

const NoContainer = () => (
  <ThemeProvider theme={preset}>
    <Video
      id="sMbNKRyFAMY"
      title="This title is passed through to the iframe and is required for accessibility."
      m={2}
    />
  </ThemeProvider>
);

export default NoContainer;
