import Image from "next/future/image";
import styled from "styled-components";

export const InfoGridCont = styled.div`
  position: relative;
  color: #fff;
  border-radius: 4px;
  padding: 15px;
  background: #1f1f1f;
`;

export const InfoGridWrapp = styled.div`
  display: grid;
  z-index: 1;
  height: 100%;
  width: 100%;
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 24px;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 5px 15px;
`;

export const InfoGridRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: "col2 col1";

  @media screen and (max-width: 768px) {
    grid-template-areas: "col1" "col2";
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 015px;
  grid-area: col1;
`;
export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 015px;
  grid-area: col2;
`;

export const TextWrapp = styled.div`
  max-width: 540px;
  padding: 0;
`;

type headingProps = {
  ligthText: any;
};

export const Heading = styled.p<headingProps>`
  margin-bottom: 16px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 700;
  color: ${({ ligthText }) => (ligthText ? "#FF6136" : "010606")};
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

type subtitleProps = {
  darkText: any;
};

export const Subtitle = styled.p<subtitleProps>`
  max-width: width 440px;
  font-size: 18px;
  line-height: 23px;
  color: ${({ darkText }) => (darkText ? "#010606" : "#fff")};
  @media screen and (max-width: 769px) {
    font-size: 16px;
  }
  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

export const TechsWrap = styled.div`
  margin-top: 5px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 5px;
`;
export const TechsSpan = styled.div`
  font-size: 0.85rem;
  background-color: #d93425;
  border-radius: 10px;
  padding: 4px;
  &:hover {
    padding: 4px 6px;
  }
`;

export const BtnWrap = styled.div`
  margin-top: 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 20px;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;
export const Img = styled(Image)`
  height: 100%;
  width: 100%;
  margin: 0 0 10px 0;
  padding: 0;
`;
