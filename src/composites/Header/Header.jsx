/**
 * The United Nations World Data Forum logo (referred to below as "the logo") contained in this React component as SVG is
 * copyright 2018 by United Nations (all rights reserved).
 *
 * What does this mean?
 *
 * - You cannot use this component unmodified in any other project.
 * - You can use this component in your own project after removing or replacing the logo.
 * - You are and not allowed to use or publish the logo.
 * - Forking this project on GitHub is explicitly allowed and encouraged.
 *
 * If you believe you have a legitimate use case to use this component including the logo,
 * please send your request to dataforum@un.org for approval.
 */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { borderColor, height } from "styled-system";
import { Box, Flex, Link, Text } from "rebass";
import SiteTitle from "../../primitives/SiteTitle";

// Filter borderColor and lineHeight to avoid that it is passed on to DOM
// See https://github.com/styled-components/styled-components/issues/439.

const Wrapper = styled(Box)(borderColor, height);

/*
const Content = styled(Flex)`
  height: 100%;
`;
*/

// lineHeight="title"
// maxWidth={9}

const Header = ({ color, link, links, title, ...props }) => (
  <Wrapper
    {...props}
    as="header"
    css={{ "border-bottom": "3px solid", "box-sizing": "content-box" }}
    borderColor={color}
    height={[64, 80, 96]}
  >
    <Flex
      css={{ "box-sizing": "border-box", height: "100%", maxWidth: "96rem" }}
      justifyContent={["center", "flex-start"]}
      alignItems={["center", "flex-end"]}
      mx="auto"
      p={[1, 2]}
    >
      <Link css={{ display: "block" }} link={link} href="/">
        <svg
          height="100%"
          viewBox="0 0 173 192"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M33.49 0H0V33.49H33.49V0Z"
            transform="translate(20.3388 157.58)"
            fill="#A21723"
          />
          <path
            d="M35.08 17.54C35.08 14.0709 34.0513 10.6797 32.124 7.7953C30.1967 4.91086 27.4573 2.66272 24.2523 1.33516C21.0473 0.00759709 17.5206 -0.33975 14.1181 0.337035C10.7157 1.01382 7.59037 2.68435 5.13736 5.13736C2.68434 7.59037 1.01382 10.7157 0.337033 14.1181C-0.339752 17.5205 0.00760269 21.0473 1.33516 24.2523C2.66272 27.4573 4.91086 30.1967 7.7953 32.124C10.6797 34.0513 14.0709 35.08 17.54 35.08C22.1919 35.08 26.6533 33.232 29.9427 29.9427C33.232 26.6533 35.08 22.1919 35.08 17.54Z"
            transform="translate(20.4988 121.05)"
            fill="#256F37"
          />
          <path
            d="M33.49 0H0V33.49H33.49V0Z"
            transform="translate(129.319 157.58)"
            fill="#C59B25"
          />
          <path
            d="M0 0H35.83L17.88 33.49L0 0Z"
            transform="translate(127.679 86.18)"
            fill="#D7B970"
          />
          <path
            d="M0 0H18.16L0.199997 33.49L0 0Z"
            transform="translate(145.219 86.18)"
            fill="#C59B25"
          />
          <path
            d="M17.54 35.08C27.2271 35.08 35.08 27.2271 35.08 17.54C35.08 7.85293 27.2271 0 17.54 0C7.85293 0 0 7.85293 0 17.54C0 27.2271 7.85293 35.08 17.54 35.08Z"
            transform="translate(56.6488 156.43)"
            fill="#086A9C"
          />
          <path
            d="M17.54 35.08C27.2271 35.08 35.08 27.2271 35.08 17.54C35.08 7.85293 27.2271 0 17.54 0C7.85293 0 0 7.85293 0 17.54C0 27.2271 7.85293 35.08 17.54 35.08Z"
            transform="translate(56.7989)"
            fill="#C59B25"
          />
          <path
            d="M35.83 34.18H0L17.96 0L35.83 34.18Z"
            transform="translate(92.1888 157.12)"
            fill="#256F37"
          />
          <path
            d="M32.85 38.48L0 24.17L30.11 0L32.85 38.48Z"
            transform="translate(92.2989 37.71)"
            fill="#086A9C"
          />
          <path
            d="M33.49 0H0V33.49H33.49V0Z"
            transform="translate(46.2505 76.1858) rotate(-19.29)"
            fill="#086A9C"
          />
          <path
            d="M0 5.37L11.06 36.99L26.42 31.61L15.35 0"
            transform="translate(46.3188 70.82)"
            fill="#5480AC"
          />
          <path
            d="M33.49 0H0V33.49H33.49V0Z"
            transform="translate(93.8788 122.03)"
            fill="#086A9C"
          />
          <path
            d="M33.49 0H0V33.49H33.49V0Z"
            transform="translate(0 39.0772) rotate(-11.75)"
            fill="#256F37"
          />
          <path
            d="M0 0H35.83L17.87 33.48L0 0Z"
            transform="translate(55.3488 122.11)"
            fill="#C59B25"
          />
          <path
            d="M16.63 0H0V33.49H16.63V0Z"
            transform="translate(146.179 157.58)"
            fill="#D7B970"
          />
          <path
            d="M0.369995 0.0800018H0V35.08H0.369995C5.02189 35.08 9.48326 33.232 12.7726 29.9427C16.062 26.6533 17.91 22.1919 17.91 17.54C17.91 12.8881 16.062 8.42673 12.7726 5.13734C9.48326 1.84796 5.02189 0 0.369995 0V0.0800018Z"
            transform="translate(37.4988 120.96)"
            fill="#588555"
          />
          <path
            d="M33.69 0H0V33.68H33.69V0Z"
            transform="translate(129.356 66.746) rotate(-69.33)"
            fill="#A21723"
          />
          <path
            d="M16.86 0H0V16.89H16.86V0Z"
            transform="translate(150.998 56.9528) rotate(-69.33)"
            fill="#C57868"
          />
          <path
            d="M16.86 0H0V16.89H16.86V0Z"
            transform="translate(145.192 72.6971) rotate(-69.33)"
            fill="#C57868"
          />
          <path
            d="M35.83 34.19H0L17.96 0L35.83 34.19Z"
            transform="translate(18.7989 82.9)"
            fill="#A21723"
          />
          <path
            d="M17 34C13.6377 34 10.3509 33.003 7.55531 31.135C4.75968 29.267 2.58074 26.612 1.29405 23.5056C0.00736153 20.3993 -0.329289 16.9811 0.326659 13.6835C0.982608 10.3858 2.60171 7.35668 4.9792 4.97919C7.35669 2.60169 10.3858 0.982608 13.6835 0.326659C16.9811 -0.329289 20.3993 0.00736153 23.5056 1.29405C26.612 2.58074 29.267 4.75968 31.135 7.55531C33.003 10.3509 34 13.6377 34 17C34 21.5087 32.2089 25.8327 29.0208 29.0208C25.8327 32.2089 21.5087 34 17 34Z"
            transform="translate(91.4988 85.11)"
            fill="#256F37"
          />
          <path
            d="M17 34C13.6377 34 10.3509 33.003 7.55531 31.135C4.75967 29.267 2.58075 26.612 1.29406 23.5056C0.00737286 20.3993 -0.329293 16.9812 0.326655 13.6835C0.982604 10.3858 2.6017 7.35669 4.9792 4.9792C7.35669 2.6017 10.3858 0.982604 13.6835 0.326655C16.9811 -0.329293 20.3993 0.00737286 23.5056 1.29406C26.612 2.58075 29.267 4.75969 31.135 7.55532C33.003 10.351 34 13.6377 34 17C34 21.5087 32.2089 25.8327 29.0208 29.0208C25.8327 32.2089 21.5087 34 17 34Z"
            transform="translate(129.529 121.4)"
            fill="#A21723"
          />
        </svg>
      </Link>
      <Flex
        as="nav"
        flexDirection={["column", "row"]}
        flex={[0, 1]}
        justifyContent={["center", "space-between"]}
        alignItems={["center", "flex-end"]}
        pl={[3, 2]}
      >
        <Link css={{ display: "block" }} link={link} href="/" mb={[0, -1]}>
          {title(color)}
        </Link>
        <Flex mb={[0, -1]}>
          {links.map(({ href, text }) => (
            <Link key={href} link={link} href={href} ml={[2, 3, 4]} mr={[2, 0]}>
              <Text
                as="span"
                color={color}
                fontFamily="sans"
                fontSize={[2, 3, 4]}
                fontWeight="bold"
              >
                {text}
              </Text>
            </Link>
          ))}
        </Flex>
      </Flex>
    </Flex>
  </Wrapper>
);

Header.propTypes = {
  color: PropTypes.string,
  link: PropTypes.func,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  ).isRequired,
  title: PropTypes.func
};

Header.defaultProps = {
  color: "primary",
  link: undefined,
  title: color => <SiteTitle color={color} />
};

export default Header;
