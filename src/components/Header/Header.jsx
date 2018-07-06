import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {
  borderColor,
  color,
  display,
  flex,
  flexDirection,
  fontFamily,
  fontSize,
  justifyContent,
  space
} from "styled-system";
import Box from "../Box";
import Container from "../Container";
import { anchorStyle } from "../style";

const OuterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 3px solid;
  ${anchorStyle};
  ${borderColor};
  ${color};
  ${fontFamily};
  ${space};
`;

const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  ${justifyContent};
`;

const Navigation = styled.nav`
  display: flex;
  font-weight: bold;
  align-items: center;
  ${flex};
  ${flexDirection};
  ${justifyContent};
  ${space};
`;

const Head = styled.div`
  display: flex;
  align-items: center;
  ${flexDirection};
`;

const Organization = styled.div`
  white-space: nowrap;
  ${fontSize};
  ${space};
`;

const Hide = styled.span`
  ${display};
`;

const Title = styled.div`
  white-space: nowrap;
  ${fontSize};
  ${space};
`;

const Links = styled.div`
  display: flex;
  ${fontSize};
`;

const Header = ({ anchor, links }) => (
  <OuterWrapper
    borderColor="primary"
    color="primary"
    fontFamily="sansSerif"
    py={[3, 2]}
  >
    <Container maxWidth={9} px={[2, 3]}>
      <InnerWrapper justifyContent={["center", "flex-start"]}>
        <Box height={[50, 40, 50]} width={[50, 40, 50]}>
          {anchor(
            "/",
            <svg
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12.001.007C5.326.007.007 5.326.007 12S5.326 23.995 12 23.995s11.994-5.319 11.994-11.994S18.676.007 12.001.007zM2.614 12.105l9.283 9.283c-5.111 0-9.283-4.172-9.283-9.283zm11.473 9.074L2.823 9.915C3.76 5.743 7.516 2.614 12 2.614a9.476 9.476 0 0 1 7.614 3.86L18.259 7.62a7.657 7.657 0 0 0-6.362-3.337A7.555 7.555 0 0 0 4.7 9.393l9.804 9.805c2.4-.835 4.276-2.92 4.798-5.424h-4.068v-1.773h6.154c0 4.485-3.129 8.24-7.301 9.178z" />
            </svg>
          )}
        </Box>
        <Navigation
          flexDirection={["column", "row"]}
          flex={[0, 1]}
          justifyContent={["center", "space-between"]}
          pl={3}
        >
          <Box>
            {anchor(
              "/",
              <Head flexDirection={["row", "column"]}>
                <Organization fontSize={[4, 6, 5]} mr={[2, 0]} mb={[0, -1]}>
                  U<Hide display={["none", "inline"]}>nited </Hide>N<Hide
                    display={["none", "inline"]}
                  >
                    ations
                  </Hide>
                </Organization>
                <Title fontSize={[4, 5, 4]}>World Data Forum</Title>
              </Head>
            )}
          </Box>
          <Links fontSize={[6, 5, 4]}>
            {links.map(({ href, text }) => (
              <Box key={text} ml={[2, 3, 4]} mr={[2, 0]}>
                {anchor(href, text)}
              </Box>
            ))}
          </Links>
        </Navigation>
      </InnerWrapper>
    </Container>
  </OuterWrapper>
);

Header.propTypes = {
  /** Render prop for anchors. */
  anchor: PropTypes.func,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  ).isRequired
};

Header.defaultProps = {
  anchor: (href, text) => <a href={href}>{text}</a>
};

export default Header;
