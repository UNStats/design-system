import React from 'react';
import { storiesOf } from '@storybook/react';
import { Image, Text } from 'rebass';
import GridList from '../GridList';
import ProfilePreview from '../ProfilePreview';
import PostPreview from './PostPreview';

storiesOf('Components/PostPreview', module)
  .add('render authors with Text', () => (
    <PostPreview
      post={{
        title: 'Vestibulum proin eu mi nulla ac enim in tempor turpis',
        date: 'May 31, 2018',
        authors: function authors() {
          return (
            <Text
              as="div"
              sx={{ fontFamily: 'body', lineHeight: 'body', mb: 3 }}
            >
              {[
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
              ].join(', ')}
            </Text>
          );
        },
      }}
      m={2}
    />
  ))
  .add('render authors with GridList', () => (
    <PostPreview
      post={{
        title: 'Vestibulum proin eu mi nulla ac enim in tempor turpis',
        date: 'May 31, 2018',
        authors: () =>
          (() => (
            <GridList
              align="left"
              gridGap={2}
              gridTemplateColumns="repeat(auto-fit, 96px)"
              render={({ id, ...author }) => (
                <ProfilePreview
                  profile={author}
                  align="left"
                  fontSize={1}
                  key={id}
                />
              )}
              values={[
                {
                  id: 'a6b4babd-6b11-4b81-8ac0-73cefb040cb7',
                  avatar() {
                    return (
                      <Image
                        alt="Willow Rangall"
                        sx={{ borderRadius: 'circle', height: 64, width: 64 }}
                        src="/avatar0.png"
                      />
                    );
                  },
                  name: 'Willow Rangall',
                },
                {
                  id: '561285d3-4eed-473c-baba-6b3564f4e6a7',
                  avatar() {
                    return (
                      <Image
                        alt="Suzy Cahan"
                        sx={{ borderRadius: 'circle', height: 64, width: 64 }}
                        src="/avatar1.png"
                      />
                    );
                  },
                  name: 'Suzy Cahan',
                },
                {
                  id: '453d9d8a-b1e6-4cac-9fdd-b6c354fa3262',
                  avatar() {
                    return (
                      <Image
                        alt="Sandra Abramovici"
                        sx={{ borderRadius: 'circle', height: 64, width: 64 }}
                        src="/avatar2.png"
                      />
                    );
                  },
                  name: 'Sandra Abramovici',
                },
                {
                  id: 'dfea2476-e3de-4b63-863e-a1c69af90138',
                  avatar() {
                    return (
                      <Image
                        alt="Jan McKea"
                        sx={{ borderRadius: 'circle', height: 64, width: 64 }}
                        src="/avatar3.png"
                      />
                    );
                  },
                  name: 'Jan McKea',
                },
                {
                  id: '15469d6c-cb5d-4750-8a0c-27a3b1beb187',
                  avatar() {
                    return (
                      <Image
                        alt="Ola Brunger"
                        sx={{ borderRadius: 'circle', height: 64, width: 64 }}
                        src="/avatar4.png"
                      />
                    );
                  },
                  name: 'Ola Brunger',
                },
                {
                  id: 'f4ee9708-9045-40e7-a899-b46841af488b',
                  avatar() {
                    return (
                      <Image
                        alt="Ivette Rowlinson"
                        sx={{ borderRadius: 'circle', height: 64, width: 64 }}
                        src="/avatar5.png"
                      />
                    );
                  },
                  name: 'Ivette Rowlinson',
                },
                {
                  id: '9946a2cf-0774-41da-830e-bffe1259360f',
                  avatar() {
                    return (
                      <Image
                        alt="Madeleine Stredwick"
                        sx={{ borderRadius: 'circle', height: 64, width: 64 }}
                        src="/avatar6.png"
                      />
                    );
                  },
                  name: 'Madeleine Stredwick',
                },
                {
                  id: 'd2e5b557-bf07-4e77-94f3-16bc1cd26a38',
                  avatar() {
                    return (
                      <Image
                        alt="Lin Billson"
                        sx={{ borderRadius: 'circle', height: 64, width: 64 }}
                        src="/avatar7.png"
                      />
                    );
                  },
                  name: 'Lin Billson',
                },
                {
                  id: '9008c43d-49ab-4907-bdaa-28cb59f0596b',
                  avatar() {
                    return (
                      <Image
                        alt="Alfie Piborn"
                        sx={{ borderRadius: 'circle', height: 64, width: 64 }}
                        src="/avatar8.png"
                      />
                    );
                  },
                  name: 'Alfie Piborn',
                },
                {
                  id: 'bfba8e8e-e052-4386-a781-5bc42eeb98b9',
                  avatar() {
                    return (
                      <Image
                        alt="Garvy Bartlomiej"
                        sx={{ borderRadius: 'circle', height: 64, width: 64 }}
                        src="/avatar9.png"
                      />
                    );
                  },
                  name: 'Garvy Bartlomiej',
                },
              ]}
              mb={3}
            />
          ))(),
        lead:
          'Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
        href: '/2018/05/31/slug',
      }}
      m={2}
    />
  ))
  .add('large font size', () => (
    <PostPreview
      post={{
        title: 'Vestibulum proin eu mi nulla ac enim in tempor turpis',
        date: 'May 31, 2018',
        authors: function authors() {
          return (
            <Text
              as="div"
              sx={{ fontFamily: 'body', lineHeight: 'body', mb: 3 }}
            >
              {[
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
              ].join(', ')}
            </Text>
          );
        },
      }}
      fontSize={[5, 6]}
      m={2}
    />
  ));
