import styled from "styled-components";

export const Button = styled.button`
  border-radius: 50px;
  background: #00825b;
  padding: 12px 30px;
  color: #fff;
  font-size: 16px;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.2s ease-in-out;

  &:focus-visible {
    outline: 2px solid #00825b;
    outline-offset: 2px;
  }

  &:hover {
    background: #02d998;
  }
`;
