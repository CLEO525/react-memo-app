import React, { useState } from "react";
import styled from "styled-components";
import AddTodo from "./AddTodo";
import TodoListItem from "./TodoListItem";
import todoData from "../../../todoData.json";

const Wrapper = styled.div`
  width: 450px;
  padding: 16px;
  margin: 20px;
  border: 1px solid grey;
  border-radius: 8px;
`;

const Container = styled.div`
  width: 100%;
  max-width: 720px;

  & > * {
    :not(:last-child) {
      margin-bottom: 16px;
    }
  }
`;

const StyledUl = styled.ul`
  margin: 0 auto;
  padding: 0 0 20px 20px;
`;

const StyledList = styled.li`
  list-style: none;
  height: 60px;
`;

function TodoList(props) {
  const [todos, setTodos] = useState(todoData);

  return (
    <Wrapper>
      <Container>
        <h1>할일 목록</h1>
        <AddTodo setTodos={setTodos} />
        <StyledUl>
          {todos.map((todo) => (
            <StyledList key={todo.id}>
              <TodoListItem todo={todo} setTodos={setTodos} />
            </StyledList>
          ))}
        </StyledUl>
      </Container>
    </Wrapper>
  );
}

export default TodoList;
