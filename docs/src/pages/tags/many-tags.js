import React from 'react';
import { ThemeProvider } from 'theme-ui';
import preset from '@undataforum/preset';
import { Tags } from '@undataforum/components';

const ManyTags = () => (
  <ThemeProvider theme={preset}>
    <Tags
      values={[
        { tag: 'id', path: '/tags/id/' },
        { tag: 'aliqua', path: '/tags/aliqua/' },
        { tag: 'mollit', path: '/tags/mollit/' },
        { tag: 'enim', path: '/tags/enim/' },
        { tag: 'veniam', path: '/tags/veniam/' },
        { tag: 'sit', path: '/tags/sit/' },
        { tag: 'fugiat', path: '/tags/fugiat/' },
        { tag: 'consequat', path: '/tags/consequat/' },
        { tag: 'cillum', path: '/tags/cillum/' },
        { tag: 'amet', path: '/tags/amet/' },
        { tag: 'officia', path: '/tags/officia/' },
        { tag: 'nostrud', path: '/tags/nostrud/' },
        { tag: 'consectetur', path: '/tags/consectetur/' },
        { tag: 'voluptate', path: '/tags/voluptate/' },
        { tag: 'magna', path: '/tags/magna/' },
        { tag: 'quis', path: '/tags/quis/' },
        { tag: 'aliquip', path: '/tags/aliquip/' },
        { tag: 'duis', path: '/tags/duis/' },
        { tag: 'nulla', path: '/tags/nulla/' },
        { tag: 'labore', path: '/tags/labore/' },
      ]}
      m={2}
    />
  </ThemeProvider>
);

export default ManyTags;
