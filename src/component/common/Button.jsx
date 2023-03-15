import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 8px 16px;
  margin-left: 5px;
  font-size: 25px;
  border-width: 1px;
  border-radius: 10px;
  cursor: pointer;
  :hover {
    background-color: grey;
    color: white;
  }
`;

function Button(props) {
  const { title, onClick } = props;

  return <StyledButton onClick={onClick}> {title || "button"}</StyledButton>;
}

export default Button;
