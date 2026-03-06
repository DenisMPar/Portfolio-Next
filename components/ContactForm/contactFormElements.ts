import { ComponentPropsWithRef, InputHTMLAttributes, LabelHTMLAttributes, TextareaHTMLAttributes } from "react";
import styled from "styled-components";

export const MyForm = styled.form<ComponentPropsWithRef<"form">>`
  max-width: 500px;
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
  gap: 20px;
`;

export const TextLabel = styled.label<LabelHTMLAttributes<HTMLLabelElement>>`
  height: 100%;
  display: flex;
  align-items: stretch;
  flex-direction: column;
  color: #c8c8d4;
  gap: 6px;
`;

export const TextInput = styled.input<InputHTMLAttributes<HTMLInputElement>>`
  background-color: #13131a;
  border: 1px solid #2e3040;
  border-radius: 6px;
  height: 44px;
  font-size: 1rem;
  padding: 5px 12px;
  color: #fff;

  &::placeholder {
    color: #555568;
  }

  &:focus-visible {
    outline: 2px solid #00825b;
    outline-offset: 2px;
  }
`;

export const TextArea = styled.textarea<TextareaHTMLAttributes<HTMLTextAreaElement>>`
  background-color: #13131a;
  border: 1px solid #2e3040;
  border-radius: 6px;
  min-height: 150px;
  height: 100%;
  font-size: 1rem;
  padding: 8px 12px;
  resize: none;
  color: #fff;

  &::placeholder {
    color: #555568;
  }

  &:focus-visible {
    outline: 2px solid #00825b;
    outline-offset: 2px;
  }
`;
