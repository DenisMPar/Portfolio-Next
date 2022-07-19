import styled from "styled-components";

export const ProyectsContainer = styled.div`
  min-height: 100vh;
  height: 100%;
  padding: 80px 60px 60px 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #d93425;
  gap: 60px;
  @media screen and (max-width: 769px) {
    padding: 80px 40px 40px 40px;
  }
  @media screen and (max-width: 480px) {
    padding: 80px 20px 20px 20px;
  }
`;

export const ProyectsTitle = styled.h1`
  margin-top: 20px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 700;
  color: #fff;
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;
export const ProyectWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  max-width: 1100px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  background-color: #d93425;
  grid-gap: 15px;
  border-radius: 4px;
  padding: 0;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
