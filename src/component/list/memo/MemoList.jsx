import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MemoListItem from "./MemoListItem";
import AddMemo from "./AddMemo";
import { memoApi } from "../../../api/index.js";

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
  const [memos, setMemos] = useState([]);
  const [loading, setLoading] = useState();
  const [error, setError] = useState(undefined);

  useEffect(() => {
    setLoading(true);
    memoApi
      .fetch() //
      .then((data) => {
        setMemos(data);
      })
      .catch((e) => setError(e))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <div>loading...</div>;
  }

  if (error) {
    return <div>{error.toString()}</div>;
  }

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
