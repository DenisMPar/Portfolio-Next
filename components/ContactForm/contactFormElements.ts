import styled from "styled-components";

export const MyForm = styled.form`
  max-width: 500px;
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
  gap: 20px;
`;

export const TextLabel = styled.label`
  height: 100%;
  display: flex;
  align-items: stretch;
  flex-direction: column;
`;
export const TextInput = styled.input`
  border: 3px solid #2c2c2c;
  border-radius: 4px;
  height: 40px;
  font-size: 1.2rem;
  padding: 5px;
`;
export const TextArea = styled.textarea`
  border: 3px solid #2c2c2c;
  border-radius: 4px;
  min-height: 150px;
  height: 100%;
  font-size: 1.2rem;
  padding: 5px;
  resize: none;
`;
