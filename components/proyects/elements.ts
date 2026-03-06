import { HTMLAttributes } from "react";
import styled from "styled-components";

export const ProyectsContainer = styled.div<HTMLAttributes<HTMLDivElement>>`
  min-height: 100vh;
  height: 100%;
  padding: 80px 60px 60px 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #17171d;
  gap: 48px;
  @media screen and (max-width: 769px) {
    padding: 80px 40px 40px 40px;
  }
  @media screen and (max-width: 480px) {
    padding: 80px 20px 20px 20px;
  }
`;

export const ProyectsTitle = styled.h1<HTMLAttributes<HTMLHeadingElement>>`
  margin-top: 20px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 700;
  color: #fff;

  &::after {
    content: "";
    display: block;
    width: 60px;
    height: 3px;
    background: #9a9490;
    margin-top: 10px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const ProyectWrapper = styled.div<HTMLAttributes<HTMLDivElement>>`
  width: 100%;
  max-width: 1100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
