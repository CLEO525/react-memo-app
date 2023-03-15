import React, { useEffect, useState } from "react";
import styled from "styled-components";
//import { useNavigate } from "react-router-dom";
import Header from "../../component/common/layout/Header";
import TodoList from "../../component/list/todo/TodoList";
import MemoList from "../../component/list/memo/MemoList";
import Today from "../../component/common/layout/Today";

const Wrapper = styled.div`
  width: 800px;
  padding: 15px;
  width: calc(100% - 60px);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > * {
    :not(:last-child) {
      margin-bottom: 16px;
    }
  }
`;

function Main(props) {
  //const navigate = useNavigate();
  const [today, setToday] = useState(getToday());

  useEffect(() => {
    const intervalID = setInterval(() => {
      setToday(getToday());
    }, 1000);
    return () => {
      clearInterval(intervalID);
    };
  }, []);

  function getToday() {
    return new Date().toLocaleTimeString("en-US");
  }

  return (
    <Wrapper>
      <Container>
        <Header>헤더 타이틀 </Header>
        <Today>{today}</Today>
        <TodoList />
        <MemoList />
      </Container>
    </Wrapper>
  );
}

export default Main;
