import React, { useState } from "react";
import styled from "styled-components";
import MemoListItem from "./MemoListItem";
import AddMemo from "./AddMemo";
import memoData from "../../../memoData.json";

// const Wrapper = styled.div`
//   width: 400px;
// `;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  & > * {
    :not(:last-child) {
      margin-right: 16px;
    }
  }
`;

const StyledDiv = styled.div`
  flex-wrap: wrap;
`;

function MemoList(props) {
  //const navigate = useNavigate();
  const [memos, setMemos] = useState(memoData);

  return (
    <Container>
      <StyledDiv>
        {memos.map((memo) => (
          <MemoListItem key={memo.id} memo={memo} setMemos={setMemos} />
        ))}
      </StyledDiv>
      <StyledDiv>
        <AddMemo setMemos={setMemos} />
      </StyledDiv>
    </Container>
  );
}

export default MemoList;
