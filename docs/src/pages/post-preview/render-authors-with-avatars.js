import React from 'react';
import { Heading, Image } from 'theme-ui';
import { Avatars, PostPreview } from '@undataforum/components';

const RenderWithNames = () => (
  <PostPreview
    post={{
      tag: 'Post',
      title: (
        <Heading as="h1" mb={3}>
          Vestibulum proin eu mi nulla ac enim in tempor turpis
        </Heading>
      ),
      date: 'May 31, 2018',
      authors: (
        <Avatars
          values={[
            {
              id: 'a6b4babd-6b11-4b81-8ac0-73cefb040cb7',
              avatar: (
                <Image
                  alt="Portrait of Willow Rangall"
                  sx={{ borderRadius: 'circle', height: 64, width: 64 }}
                  src="/avatar0.png"
                />
              ),
              name: 'Willow Rangall',
              href: '/profiles/willow-rangall',
            },
            {
              id: '561285d3-4eed-473c-baba-6b3564f4e6a7',
              avatar: (
                <Image
                  alt="Portrait of Suzy Cahan"
                  sx={{ borderRadius: 'circle', height: 64, width: 64 }}
                  src="/avatar1.png"
                />
              ),
              name: 'Suzy Cahan',
              href: '/profiles/suzy-cahan',
            },
            {
              id: '453d9d8a-b1e6-4cac-9fdd-b6c354fa3262',
              avatar: (
                <Image
                  alt="Portrait of Sandra Abramovici"
                  sx={{ borderRadius: 'circle', height: 64, width: 64 }}
                  src="/avatar2.png"
                />
              ),
              name: 'Sandra Abramovici',
              href: '/profiles/sandra-abramovici',
            },
            {
              id: 'dfea2476-e3de-4b63-863e-a1c69af90138',
              avatar: (
                <Image
                  alt="Portrait of Jan McKea"
                  sx={{ borderRadius: 'circle', height: 64, width: 64 }}
                  src="/avatar3.png"
                />
              ),
              name: 'Jan McKea',
              href: '/profiles/jan-mckea',
            },
            {
              id: '15469d6c-cb5d-4750-8a0c-27a3b1beb187',
              avatar: (
                <Image
                  alt="Portrait of Ola Brunger"
                  sx={{ borderRadius: 'circle', height: 64, width: 64 }}
                  src="/avatar4.png"
                />
              ),
              name: 'Ola Brunger',
              href: '/profiles/ola-brunger',
            },
            {
              id: 'f4ee9708-9045-40e7-a899-b46841af488b',
              avatar: (
                <Image
                  alt="Portrait of Ivette Rowlinson"
                  sx={{ borderRadius: 'circle', height: 64, width: 64 }}
                  src="/avatar5.png"
                />
              ),
              name: 'Ivette Rowlinson',
              href: '/profiles/ivette-rowlinson',
            },
            {
              id: '9946a2cf-0774-41da-830e-bffe1259360f',
              avatar: (
                <Image
                  alt="Portrait of Madeleine Stredwick"
                  sx={{ borderRadius: 'circle', height: 64, width: 64 }}
                  src="/avatar6.png"
                />
              ),
              name: 'Madeleine Stredwick',
              href: '/profiles/madeleine-stredwick',
            },
            {
              id: 'd2e5b557-bf07-4e77-94f3-16bc1cd26a38',
              avatar: (
                <Image
                  alt="Portrait of Lin Billson"
                  sx={{ borderRadius: 'circle', height: 64, width: 64 }}
                  src="/avatar7.png"
                />
              ),
              name: 'Lin Billson',
              href: '/profiles/lin-billson',
            },
            {
              id: '9008c43d-49ab-4907-bdaa-28cb59f0596b',
              avatar: (
                <Image
                  alt="Portrait of Alfie Piborn"
                  sx={{ borderRadius: 'circle', height: 64, width: 64 }}
                  src="/avatar8.png"
                />
              ),
              name: 'Alfie Piborn',
              href: '/profiles/alfie-piborn',
            },
            {
              id: 'bfba8e8e-e052-4386-a781-5bc42eeb98b9',
              avatar: (
                <Image
                  alt="Portrait of Garvy Bartlomiej"
                  sx={{ borderRadius: 'circle', height: 64, width: 64 }}
                  src="/avatar9.png"
                />
              ),
              name: 'Garvy Bartlomiej',
              href: '/profiles/garvy-bartlomiej',
            },
          ]}
          mb={3}
        />
      ),
    }}
    m={2}
  />
);

export default RenderWithNames;
