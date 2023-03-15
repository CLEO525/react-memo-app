import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../common/Button";
import { createNextId } from "../../../utils/helpers";

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
  const [text, setText] = useState("");
  const { setTodos } = props;

  const handleClick = () => {
    const todoText = text.trim();
    if (!todoText) {
      alert("입력");
      return;
    }
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: createNextId(prevTodos), text: todoText, checked: false },
    ]);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setText("");
  };

  return (
    <StyledForm onSubmit={onSubmit}>
      <StyledInputText
        type="text"
        placeholder="할일 입력"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <Button type="button" onClick={handleClick} title="+" />
    </StyledForm>
  );
}
