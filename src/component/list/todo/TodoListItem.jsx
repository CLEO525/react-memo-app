import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;
const ContentText = styled.p`
  font-size: 25px;
  ${(props) =>
    props.checked &&
    `
      color: grey;
      text-decoration: line-through;    
    `}
`;

const CheckBoxSize = styled.input`
  zoom: 2;
  margin-right: 15px;
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

function TodoListItem(props) {
  const { todo, setTodos } = props;

  const handleCheck = () => {
    setTodos((prevTodos) => {
      return prevTodos.map((prevTodo) => {
        return prevTodo.id === todo.id
          ? { ...prevTodo, checked: !prevTodo.checked }
          : prevTodo;
      });
    });
  };

  const handleClick = () => {
    setTodos((prevTodos) =>
      prevTodos.filter((prevTodo) => prevTodo.id !== todo.id),
    );
  };

  return (
    <Wrapper>
      <ContentText checked={todo.checked}>
        <CheckBoxSize
          type="checkbox"
          checked={todo.checked}
          id={todo.id}
          onChange={handleCheck}
        />
        <label htmlFor={todo.id}>{todo.text}</label>
        <StyledButton onClick={handleClick}>&times;</StyledButton>
      </ContentText>
    </Wrapper>
  );
}

export default TodoListItem;
