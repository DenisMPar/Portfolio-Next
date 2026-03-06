import { HTMLAttributes } from "react";
import styled from "styled-components";

export const ServicesContainer = styled.div<HTMLAttributes<HTMLDivElement>>`
  min-height: 100vh;
  height: 100%;
  padding: 80px 60px 60px 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #111116;
  gap: 60px;
  @media screen and (max-width: 769px) {
    padding: 80px 40px 40px 40px;
  }
  @media screen and (max-width: 480px) {
    padding: 80px 20px 20px 20px;
  }
`;

export const ServicesTitle = styled.h1<HTMLAttributes<HTMLHeadingElement>>`
  margin-top: 20px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 700;
  color: #f5f0eb;
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const CardsWrapper = styled.div<HTMLAttributes<HTMLDivElement>>`
  display: flex;
  flex-wrap: wrap;
  max-width: 1100px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  background-color: #111116;
  grid-gap: 15px;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
