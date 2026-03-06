import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

export const Button = styled.button<ButtonHTMLAttributes<HTMLButtonElement>>`
  border-radius: 50px;
  background: transparent;
  padding: 12px 30px;
  color: #f5f0eb;
  font-size: 16px;
  border: 1.5px solid #f5f0eb;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;

  &:focus-visible {
    outline: 2px solid #f5f0eb;
    outline-offset: 2px;
  }

  &:hover {
    background: #f5f0eb;
    color: #0a0a0d;
  }
`;
