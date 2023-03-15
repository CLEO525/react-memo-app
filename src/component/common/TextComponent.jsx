import React from "react";
import styled from "styled-components";

const StyledTextArea = styled.textarea`
  width: calc(100% - 32px);
  ${(props) => {
    props.height &&
      `
        height: ${props.height}px;
    `;
  }}
  padding: 16px;
  font-size: 20px;
  line-height: 20px;
`;

function TextComponent(props) {
  const { height, onChange, value } = props;
  return <StyledTextArea onChange={onChange} height={height} value={value} />;
}
export default TextComponent;
