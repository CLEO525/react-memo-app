import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "../../common/Button";
import TextComponent from "../../common/TextComponent";
import { createNextId } from "../../../utils/helpers";

const Wrapper = styled.div`
  padding: 16px;
  width: calc(100% - 32px);
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Container = styled.div`
  width: 100%;
  max-width: 720px;
`;

function AddMemo(props) {
  const [memo, setMemo] = useState("");
  const { setMemos } = props;

  const handleClick = () => {
    const memoText = memo.trim();
    if (!memoText) {
      alert("글을 입력하세요");
      return;
    }

    setMemos((prevMemos) => [
      ...prevMemos,
      { id: createNextId(prevMemos), memo: memoText },
    ]);

    setMemo("");
  };
  return (
    <Wrapper>
      <Container>
        <TextComponent
          height={50}
          value={memo} //value일때는 readOnly
          onChange={(e) => {
            setMemo(e.target.value);
          }}
        />
        <Button title="작성하기" onClick={handleClick} />
      </Container>
    </Wrapper>
  );
}

export default AddMemo;
