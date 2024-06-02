import Image from "next/future/image";
import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const CardTitle = styled.h2`
  font-size: 1.5rem;
  text-align: center;
  color: #fff;
  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;
export const ServiceIconWrapper = styled.div`
  height: 120px;
  width: 120px;
  display: flex;
  flex-direction: column;
  background-color: #000;
  border-radius: 6px;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    height: 130px;
    width: 130px;
  }
  @media screen and (max-width: 480px) {
    height: 80px;
    width: 80px;
  }
`;
export const ServiceIcon = styled(Image)`
  height: 100%;
  width: 100%;
`;
