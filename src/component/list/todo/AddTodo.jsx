import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../../common/Button";
import { todoApi } from "../../../api";

const StyledInputText = styled.input`
  width: 350px;
  height: 40px;
  font-size: 25px;
`;

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
`;

export default function AddTodo(props) {
  const [todo, setTodo] = useState("");
  const { setTodos } = props;

  const handleClick = async () => {
    const todoText = todo.trim();
    if (!todoText) {
      alert("글을 입력하세요");
      return;
    }
    await todoApi.create({ todo: todoText, checked: false });
    const data = await todoApi.fetch();
    setTodos(data);

    setTodo("");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setTodo("");
  };

  return (
    <StyledForm onSubmit={onSubmit}>
      <StyledInputText
        type="text"
        placeholder="할일 입력"
        onChange={(e) => {
          setTodo(e.target.value);
        }}
        value={todo}
      />
      <Button type="button" onClick={handleClick} title="+" />
    </StyledForm>
  );
}
