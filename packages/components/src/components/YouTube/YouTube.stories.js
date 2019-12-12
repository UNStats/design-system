import React from 'react';
import { storiesOf } from '@storybook/react';
import { Container, Grid } from '@theme-ui/components';

import YouTube from './YouTube';

storiesOf('Components/YouTube', module)
  .add('video inside container', () => (
    <Container sx={{ maxWidth: '36em', my: [2, 3, 4], px: [2, 3, 4] }}>
      <YouTube id="sMbNKRyFAMY" title="Test video title" />
    </Container>
  ))
  .add('multiple videos inside grid', () => (
    <Container sx={{ maxWidth: 'width.default', my: [2, 3, 4], px: [2, 3, 4] }}>
      <Grid gap={4} columns={[1, null, 2]}>
        <YouTube id="aPLNGcIq6rU" title="First test video" />
        <YouTube id="zGF0A6rmcRA" title="Second test video" />
        <YouTube id="aQqoG3BNcrA" title="Third test video" />
        <YouTube id="sMbNKRyFAMY" title="Third test video" />
      </Grid>
    </Container>
  ));
