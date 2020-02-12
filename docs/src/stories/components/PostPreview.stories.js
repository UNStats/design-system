import React from 'react';
import { storiesOf } from '@storybook/react';
import { Container, Grid, Image } from 'theme-ui';
import { Avatars, Names, PostPreview } from '@undataforum/components';

storiesOf('Components/PostPreview', module)
  .add('render authors with Names', () => (
    <PostPreview
      post={{
        title: 'Vestibulum proin eu mi nulla ac enim in tempor turpis',
        date: 'May 31, 2018',
        authors() {
          return (
            <Names
              values={[
                'Willow Rangall',
                'Suzy Cahan',
                'Sandra Abramovici',
                'Jan McKea',
                'Ola Brunger',
                'Ivette Rowlinson',
                'Madeleine Stredwick',
                'Lin Billson',
                'Alfie Piborn',
                'Garvy Bartlomiej',
              ]}
              mb={3}
            />
          );
        },
        description:
          'Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
        href: '/blog/vestibulum-proin-eu',
      }}
      m={2}
    />
  ))
  .add('render authors with Avatars', () => (
    <PostPreview
      post={{
        title: 'Vestibulum proin eu mi nulla ac enim in tempor turpis',
        date: 'May 31, 2018',
        authors() {
          return (
            <Avatars
              values={[
                {
                  id: 'a6b4babd-6b11-4b81-8ac0-73cefb040cb7',
                  avatar() {
                    return (
                      <Image
                        alt="Portrait of Willow Rangall"
                        sx={{ borderRadius: 'circle', height: 64, width: 64 }}
                        src="/avatar0.png"
                      />
                    );
                  },
                  name: 'Willow Rangall',
                  href: '/profiles/willow-rangall',
                },
                {
                  id: '561285d3-4eed-473c-baba-6b3564f4e6a7',
                  avatar() {
                    return (
                      <Image
                        alt="Portrait of Suzy Cahan"
                        sx={{ borderRadius: 'circle', height: 64, width: 64 }}
                        src="/avatar1.png"
                      />
                    );
                  },
                  name: 'Suzy Cahan',
                  href: '/profiles/suzy-cahan',
                },
                {
                  id: '453d9d8a-b1e6-4cac-9fdd-b6c354fa3262',
                  avatar() {
                    return (
                      <Image
                        alt="Portrait of Sandra Abramovici"
                        sx={{ borderRadius: 'circle', height: 64, width: 64 }}
                        src="/avatar2.png"
                      />
                    );
                  },
                  name: 'Sandra Abramovici',
                  href: '/profiles/sandra-abramovici',
                },
                {
                  id: 'dfea2476-e3de-4b63-863e-a1c69af90138',
                  avatar() {
                    return (
                      <Image
                        alt="Portrait of Jan McKea"
                        sx={{ borderRadius: 'circle', height: 64, width: 64 }}
                        src="/avatar3.png"
                      />
                    );
                  },
                  name: 'Jan McKea',
                  href: '/profiles/jan-mckea',
                },
                {
                  id: '15469d6c-cb5d-4750-8a0c-27a3b1beb187',
                  avatar() {
                    return (
                      <Image
                        alt="Portrait of Ola Brunger"
                        sx={{ borderRadius: 'circle', height: 64, width: 64 }}
                        src="/avatar4.png"
                      />
                    );
                  },
                  name: 'Ola Brunger',
                  href: '/profiles/ola-brunger',
                },
                {
                  id: 'f4ee9708-9045-40e7-a899-b46841af488b',
                  avatar() {
                    return (
                      <Image
                        alt="Portrait of Ivette Rowlinson"
                        sx={{ borderRadius: 'circle', height: 64, width: 64 }}
                        src="/avatar5.png"
                      />
                    );
                  },
                  name: 'Ivette Rowlinson',
                  href: '/profiles/ivette-rowlinson',
                },
                {
                  id: '9946a2cf-0774-41da-830e-bffe1259360f',
                  avatar() {
                    return (
                      <Image
                        alt="Portrait of Madeleine Stredwick"
                        sx={{ borderRadius: 'circle', height: 64, width: 64 }}
                        src="/avatar6.png"
                      />
                    );
                  },
                  name: 'Madeleine Stredwick',
                  href: '/profiles/madeleine-stredwick',
                },
                {
                  id: 'd2e5b557-bf07-4e77-94f3-16bc1cd26a38',
                  avatar() {
                    return (
                      <Image
                        alt="Portrait of Lin Billson"
                        sx={{ borderRadius: 'circle', height: 64, width: 64 }}
                        src="/avatar7.png"
                      />
                    );
                  },
                  name: 'Lin Billson',
                  href: '/profiles/lin-billson',
                },
                {
                  id: '9008c43d-49ab-4907-bdaa-28cb59f0596b',
                  avatar() {
                    return (
                      <Image
                        alt="Portrait of Alfie Piborn"
                        sx={{ borderRadius: 'circle', height: 64, width: 64 }}
                        src="/avatar8.png"
                      />
                    );
                  },
                  name: 'Alfie Piborn',
                  href: '/profiles/alfie-piborn',
                },
                {
                  id: 'bfba8e8e-e052-4386-a781-5bc42eeb98b9',
                  avatar() {
                    return (
                      <Image
                        alt="Portrait of Garvy Bartlomiej"
                        sx={{ borderRadius: 'circle', height: 64, width: 64 }}
                        src="/avatar9.png"
                      />
                    );
                  },
                  name: 'Garvy Bartlomiej',
                  href: '/profiles/garvy-bartlomiej',
                },
              ]}
              mb={3}
            />
          );
        },
      }}
      m={2}
    />
  ))
  .add('large font size', () => (
    <PostPreview
      post={{
        title: 'Vestibulum proin eu mi nulla ac enim in tempor turpis',
        date: 'May 31, 2018',
        authors() {
          return (
            <Names
              values={[
                'Willow Rangall',
                'Suzy Cahan',
                'Sandra Abramovici',
                'Jan McKea',
                'Ola Brunger',
                'Ivette Rowlinson',
                'Madeleine Stredwick',
                'Lin Billson',
                'Alfie Piborn',
                'Garvy Bartlomiej',
              ]}
              variant="bold"
              mb={3}
            />
          );
        },
        href: '/blog/vestibulum-proin-eu',
      }}
      fontSize={[5, 6]}
      m={2}
    />
  ))
  .add('grid of posts', () => {
    const posts = [
      {
        id: 'cbdb6147-cab8-5511-a325-28d4dee7f914',
        title: 'Et nulla in incididunt cupidatat pariatur sit sint proident',
        date: 'Dec 9, 2019',
        authors() {
          return (
            <Names
              values={['Mildred Webb', 'Lura Day', 'Viola Carpenter']}
              mb={3}
            />
          );
        },
        description:
          'Deserunt id duis ea aliqua amet est veniam anim. Deserunt incididunt aute in ut id occaecat elit irure consectetur dolor in labore minim. Ad nulla fugiat ipsum irure commodo do anim duis mollit eiusmod. Dolore nulla ea aliquip esse minim sit amet reprehenderit deserunt proident culpa amet.',
        href: '/blog/et-nulla-in-incididunt',
      },
      {
        id: 'a1ca7aa8-f666-5f7b-9dd2-bac6f34ac744',
        title: 'Dolore in eiusmod culpa duis ut aliquip et ea',
        date: 'Dec 8, 2019',
        authors() {
          return <Names values={['Bertha Johnson']} mb={3} />;
        },
        description:
          'Reprehenderit in aliqua sit elit mollit Lorem reprehenderit Lorem esse. Enim occaecat cupidatat do exercitation qui quis ipsum Lorem laborum deserunt ullamco proident ad. Aliqua aliquip exercitation Lorem veniam id. Anim occaecat excepteur tempor ullamco. Ad duis voluptate eu incididunt ea pariatur pariatur id ullamco do ex. Quis qui quis enim anim labore. Voluptate voluptate quis proident pariatur occaecat eiusmod consequat amet minim elit tempor esse cillum reprehenderit.',
        href: '/blog/reprehenderit-in-aliqua-sit-elit',
      },
      {
        id: '057a4af9-1e4c-5cfa-b633-237833b24ce0',
        title:
          'Irure aliquip ipsum eu qui cupidatat sunt cillum eu velit dolor',
        date: 'Dec 7, 2019',
        authors() {
          return <Names values={['Lucy White']} mb={3} />;
        },
        description:
          'Commodo sint id cillum nostrud. Excepteur aliqua incididunt anim elit esse. Fugiat sint consectetur dolore culpa officia laboris officia labore ad id esse in. Ullamco excepteur tempor veniam dolore sint.',
        href: '/blog/irure-aliquip-ipsum',
      },
      {
        id: '740f7b45-4a4a-5ba7-8b33-ce9946775a82',
        title: 'Eu sit excepteur non cupidatat',
        date: 'Dec 6, 2019',
        authors() {
          return <Names values={['Jim Russell', 'Ida Hall']} mb={3} />;
        },
        description:
          'Exercitation id elit enim dolor veniam nostrud qui veniam. Cillum commodo proident aliqua magna excepteur aliqua qui ea enim duis irure labore. Enim dolore proident ipsum incididunt amet et elit nisi reprehenderit dolor anim consequat quis. Minim irure adipisicing ipsum pariatur duis. Culpa culpa tempor dolore nulla velit eu sit sunt minim esse qui deserunt elit quis. Ex Lorem in labore qui ea.',
        href: '/blog/eu-sit-excepteur-non-cupidatat',
      },
    ];
    return (
      <Container
        sx={{
          maxWidth: 'width.default',
          my: [2, 3, 4],
          px: [2, 3, 4],
        }}
      >
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
  })
  .add('custom colors', () => (
    <PostPreview
      post={{
        title: 'Vestibulum proin eu mi nulla ac enim in tempor turpis',
        date: 'May 31, 2018',
        authors() {
          return (
            <Names
              values={[
                'Willow Rangall',
                'Suzy Cahan',
                'Sandra Abramovici',
                'Jan McKea',
                'Ola Brunger',
                'Ivette Rowlinson',
                'Madeleine Stredwick',
                'Lin Billson',
                'Alfie Piborn',
                'Garvy Bartlomiej',
              ]}
              mb={3}
            />
          );
        },
        description:
          'Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
        href: '/blog/vestibulum-proin-eu',
      }}
      colors={{
        text: 'background',
        background: 'secondary',
        accent: 'background',
      }}
      p={2}
    />
  ));
