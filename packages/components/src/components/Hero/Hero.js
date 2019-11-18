import React from 'react';
import { func, string, shape } from 'prop-types';
import { Box, Button, Flex, Text } from '@theme-ui/components';

import SmartLink from '../SmartLink';

const Hero = ({ logo, image, text, action, ...props }) => (
  <Box
    {...props}
    sx={{
      height: ['100vh', null, '50vh'],
      position: 'relative',
      maxHeight: '100vh',
    }}
  >
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        zIndex: -1,
      }}
    >
      {image()}
    </Box>
    <Flex
      sx={{
        color: 'primary',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        p: 4,
        height: '100%',
      }}
    >
      <Box sx={{ height: 128, variant: 'pairings.hero', p: 3, mb: 4 }}>
        {logo()}
      </Box>
      <Text
        sx={{
          fontFamily: 'heading',
          fontWeight: 'heading',
          fontSize: [4, 5, 6],
          lineHeight: 'heading',
          textAlign: 'center',
          variant: 'pairings.hero',
          p: 1,
        }}
      >
        {text}
      </Text>
      {action && (
        <Button
          as={SmartLink}
          sx={{ fontFamily: 'body', mt: 4 }}
          href={action.href}
        >
          {action.text}
        </Button>
      )}
    </Flex>
  </Box>
);

Hero.propTypes = {
  image: func.isRequired,
  logo: func.isRequired,
  text: string.isRequired,
  action: shape({ text: string.isRequired, href: string.isRequired }),
};

export default Hero;
