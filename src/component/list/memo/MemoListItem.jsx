import React from "react";
import styled from "styled-components";
import { memoApi } from "../../../api";

const Wrapper = styled.div`
  width: 700px;
  margin-left: 20px;
  border: 1px solid grey;
  border-radius: 8px;
  cursor: pointer;
  :hover {
    background: lightgrey;
  }

  & > * {
    :not(:last-child) {
      margin-bottom: 16px;
    }
  }
`;

const Container = styled.div`
  width: auto;
  height: auto;
  display: inline-block;
  padding: 16px;
`;

const MemoText = styled.p`
  font-size: 25px;
`;
const StyledButton = styled.button`
  width: 30px;
  height: 30px;
  font-size: 25px;
  margin-left: 25px;
  background-color: white;
  border-width: 1px;
  border-radius: 25px;
  :hover {
    background-color: grey;
    color: white;
  }
`;

function MemoListItem(props) {
  const { memo, setMemos } = props;

  const handleClick = () => {
    // setMemos((prevMemos) =>
    //   prevMemos.filter((prevMemo) => prevMemo.id !== memo.id),
    // );
    memoApi.destroy(memo.id);
    memoApi.fetch().then((data) => {
      setMemos(data);
    });
  };

  return (
    <Wrapper>
      <Container>
        <StyledButton onClick={handleClick}>&times;</StyledButton>
        <MemoText>{memo.memo}</MemoText>
      </Container>
    </Wrapper>
  );
}

export default MemoListItem;
