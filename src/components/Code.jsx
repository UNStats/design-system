import React from 'react';
import { node } from 'prop-types';
import styled from 'styled-components';
import { Text } from 'rebass';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/duotoneLight';

export const LineNo = styled.span`
  display: inline-block;
  width: 2em;
  user-select: none;
  opacity: 0.3;
`;

const Code = ({ children, ...other }) =>
  children.props.props && children.props.props.className === 'language-jsx' ? (
    <Highlight
      {...defaultProps}
      theme={theme}
      code={children.props.children.trim()}
      language="jsx"
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Text
          {...other}
          as="pre"
          p={2}
          my={3}
          lineHeight="copy"
          textAlign="left"
          className={className}
          style={style}
        >
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              <LineNo>{i + 1}</LineNo>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </Text>
      )}
    </Highlight>
  ) : (
    <pre {...other}>{children}</pre>
  );

Code.propTypes = {
  children: node.isRequired,
};

export default Code;
