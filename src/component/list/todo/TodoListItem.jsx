import React, { useState } from "react";
import styled from "styled-components";
import { todoApi } from "../../../api";

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
  const [textType, setTextType] = useState("hidden");
  const [updateText, setUpdateText] = useState(todo.todo);

  const handleCheck = async () => {
    setTodos((prevTodos) => {
      return prevTodos.map((prevTodo) => {
        return prevTodo.id === todo.id
          ? { ...prevTodo, checked: !prevTodo.checked }
          : prevTodo;
      });
    });

    await todoApi.update(todo.id, { todo: todo.todo, checked: !todo.checked });
    const data = await todoApi.fetch();
    setTodos(data);
  };

  const handleChange = (e) => {
    setUpdateText(e.target.value);
  };

  const handleClick = async () => {
    // setTodos((prevTodos) =>
    //   prevTodos.filter((prevTodo) => prevTodo.id !== todo.id),
    // );
    await todoApi.destroy(todo.id);
    const data = await todoApi.fetch();
    setTodos(data);
  };

  const handleUpdateClick = async () => {
    textType === "hidden" ? setTextType("text") : setTextType("hidden");
    await todoApi.update(todo.id, { todo: updateText, checked: todo.checked });
    // todoApi.fetch().then((data) => {
    //   setTodos(data);
    // });
    const data = await todoApi.fetch();
    setTodos(data);
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
        <label htmlFor={todo.id}>{todo.todo}</label>
        <button onClick={handleUpdateClick}>✏️</button>
        <input type={textType} value={updateText} onChange={handleChange} />
        <StyledButton onClick={handleClick}>&times;</StyledButton>
      </ContentText>
    </Wrapper>
  );
}

export default TodoListItem;
