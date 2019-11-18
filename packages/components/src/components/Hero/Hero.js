import React from 'react';
import { func, string, shape } from 'prop-types';
import { Box, Button, Flex, Grid, Text } from '@theme-ui/components';
import { useThemeUI } from 'theme-ui';

import Container from '../Container';
import SmartLink from '../SmartLink';

// Any props that are not part of Container's API will be passed into its Box's sx prop.
const Hero = ({ logo, image, text, action, promo, ...props }) => {
  const { theme } = useThemeUI();
  const breakpoint = `@media (min-width: ${theme.breakpoints[1]})`;
  // sx prop for Grid.
  // On small and medium screens stack in portatit and split in landscape.
  const sx = {
    height: '100%',
    '@media (orientation: portrait)': {
      gridTemplateColumns: '1fr',
      gridTemplateRows: '1fr 1fr',
    },
    '@media (orientation: landscape)': {
      gridTemplateColumns: '1fr 1fr',
      gridTemplateRows: '1fr',
    },
  };
  // On large screens always split.
  sx[breakpoint] = {
    '@media (orientation: portrait)': {
      gridTemplateColumns: '1fr 1fr',
      gridTemplateRows: '1fr',
    },
  };
  return (
    <Container
      {...props}
      maxWidth="wide"
      position="relative"
      height={['100vh', null, '50vh']}
      maxHeight="100vh"
      p={[2, 3, 4]}
      variant="pairings.hero"
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
      <Grid sx={sx} gap={3}>
        <Flex
          sx={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}
        >
          <Box sx={{ height: 128, mb: 3 }}>{logo()}</Box>
          <Text
            sx={{
              fontFamily: 'heading',
              fontWeight: 'heading',
              fontSize: [4, 5],
              lineHeight: 'heading',
              textAlign: 'center',
              p: 1,
            }}
          >
            {text}
          </Text>
          {action && (
            <Button
              as={SmartLink}
              sx={{ fontFamily: 'body', mt: 3 }}
              href={action.href}
            >
              {action.text}
            </Button>
          )}
        </Flex>
        <Flex
          sx={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {promo()}
        </Flex>
      </Grid>
    </Container>
  );
};

Hero.propTypes = {
  image: func.isRequired,
  logo: func.isRequired,
  text: string.isRequired,
  action: shape({ text: string.isRequired, href: string.isRequired }),
  promo: func.isRequired,
};

export default Hero;
