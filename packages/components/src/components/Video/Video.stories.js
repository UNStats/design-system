import React from 'react';
import { storiesOf } from '@storybook/react';
import { Container, Grid } from '@theme-ui/components';

import Video from './Video';

storiesOf('Components/Video', module)
  .add('video inside container', () => (
    <Container sx={{ maxWidth: '36em', my: [2, 3, 4], px: [2, 3, 4] }}>
      <Video id="sMbNKRyFAMY" title="Every iframe needs a title" />
    </Container>
  ))
  .add('multiple videos inside grid', () => (
    <Container sx={{ maxWidth: 'width.default', my: [2, 3, 4], px: [2, 3, 4] }}>
      <Grid gap={4} columns={[1, null, 2]}>
        <Video id="aPLNGcIq6rU" title="Title for iframe" />
        <Video id="zGF0A6rmcRA" title="Title for iframe" />
        <Video id="aQqoG3BNcrA" title="Title for iframe" />
        <Video id="sMbNKRyFAMY" title="Title for iframe" />
      </Grid>
    </Container>
  ));
