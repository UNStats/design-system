import React from 'react';
import { Container, Grid, Heading, Text } from 'theme-ui';
import { Names, PostPreview } from '@undataforum/components';

const posts = [
  {
    id: 'cbdb6147-cab8-5511-a325-28d4dee7f914',
    tag: 'Blog',
    title: (
      <Heading as="h2" mb={3}>
        Et nulla in incididunt cupidatat pariatur sit sint proident
      </Heading>
    ),
    date: 'Dec 9, 2019',
    authors: (
      <Names values={['Mildred Webb', 'Lura Day', 'Viola Carpenter']} mb={3} />
    ),
    description: (
      <Text as="p" variant="text.default" mb={3}>
        Deserunt id duis ea aliqua amet est veniam anim. Deserunt incididunt
        aute in ut id occaecat elit irure consectetur dolor in labore minim. Ad
        nulla fugiat ipsum irure commodo do anim duis mollit eiusmod. Dolore
        nulla ea aliquip esse minim sit amet reprehenderit deserunt proident
        culpa amet.
      </Text>
    ),
    href: '/blog/et-nulla-in-incididunt',
  },
  {
    id: 'a1ca7aa8-f666-5f7b-9dd2-bac6f34ac744',
    tag: 'Article',
    title: (
      <Heading as="h2" mb={3}>
        Dolore in eiusmod culpa duis ut aliquip et ea
      </Heading>
    ),
    date: 'Dec 8, 2019',
    authors: <Names values={['Bertha Johnson']} mb={3} />,
    description: (
      <Text as="p" variant="text.default" mb={3}>
        Reprehenderit in aliqua sit elit mollit Lorem reprehenderit Lorem esse.
        Enim occaecat cupidatat do exercitation qui quis ipsum Lorem laborum
        deserunt ullamco proident ad. Aliqua aliquip exercitation Lorem veniam
        id. Anim occaecat excepteur tempor ullamco. Ad duis voluptate eu
        incididunt ea pariatur pariatur id ullamco do ex. Quis qui quis enim
        anim labore. Voluptate voluptate quis proident pariatur occaecat eiusmod
        consequat amet minim elit tempor esse cillum reprehenderit.
      </Text>
    ),
    href: '/blog/reprehenderit-in-aliqua-sit-elit',
  },
  {
    id: '057a4af9-1e4c-5cfa-b633-237833b24ce0',
    tag: 'News',
    title: (
      <Heading as="h2" mb={3}>
        Irure aliquip ipsum eu qui cupidatat sunt cillum eu velit dolor
      </Heading>
    ),
    date: 'Dec 7, 2019',
    authors: <Names values={['Lucy White']} mb={3} />,
    description: (
      <Text as="p" variant="text.default" mb={3}>
        Commodo sint id cillum nostrud. Excepteur aliqua incididunt anim elit
        esse. Fugiat sint consectetur dolore culpa officia laboris officia
        labore ad id esse in. Ullamco excepteur tempor veniam dolore sint.
      </Text>
    ),
    href: '/blog/irure-aliquip-ipsum',
  },
  {
    id: '740f7b45-4a4a-5ba7-8b33-ce9946775a82',
    tag: 'Opinion',
    title: (
      <Heading as="h2" mb={3}>
        Eu sit excepteur non cupidatat
      </Heading>
    ),
    date: 'Dec 6, 2019',
    authors: <Names values={['Jim Russell', 'Ida Hall']} mb={3} />,
    description: (
      <Text as="p" variant="text.default" mb={3}>
        Exercitation id elit enim dolor veniam nostrud qui veniam. Cillum
        commodo proident aliqua magna excepteur aliqua qui ea enim duis irure
        labore. Enim dolore proident ipsum incididunt amet et elit nisi
        reprehenderit dolor anim consequat quis. Minim irure adipisicing ipsum
        pariatur duis. Culpa culpa tempor dolore nulla velit eu sit sunt minim
        esse qui deserunt elit quis. Ex Lorem in labore qui ea.
      </Text>
    ),
    href: '/blog/eu-sit-excepteur-non-cupidatat',
  },
];

const GridOfPosts = () => (
  <Container my={3}>
    <Grid gap={4} columns={[1, null, 2]}>
      {posts.map(({ id, ...post }) => (
        <PostPreview
          post={{ ...post }}
          colors={{
            text: 'text',
            background: 'background',
            accent: 'secondary',
          }}
          key={id}
        />
      ))}
    </Grid>
  </Container>
);

export default GridOfPosts;
