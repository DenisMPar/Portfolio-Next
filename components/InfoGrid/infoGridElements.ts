import Image from "next/image";
import { HTMLAttributes } from "react";
import styled from "styled-components";

export const InfoGridCont = styled.div`
  position: relative;
  color: #fff;
  border-radius: 12px;
  background: #1d1e26;
  border: 1px solid #2e3538;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 48px rgba(0, 0, 0, 0.5);
    border-color: #f5f0eb;
  }
`;

export const InfoGridWrapp = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const InfoGridRow = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Column1 = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex: 1;
  grid-area: col1;
`;

export const Column2 = styled.div`
  width: 100%;
  height: 220px;
  overflow: hidden;
  grid-area: col2;
`;

export const TextWrapp = styled.div`
  margin-bottom: 12px;
`;

export const TitleWrapp = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

type headingProps = HTMLAttributes<HTMLHeadingElement> & {
  ligthText: any;
};

export const Heading = styled.h2<headingProps>`
  margin-bottom: 8px;
  font-size: 24px;
  line-height: 1.2;
  font-weight: 700;
  color: ${({ ligthText }) => (ligthText ? "#f5f0eb" : "#010606")};

  @media screen and (max-width: 480px) {
    font-size: 20px;
  }
`;

type subtitleProps = HTMLAttributes<HTMLParagraphElement> & {
  darkText: any;
};

export const Subtitle = styled.p<subtitleProps>`
  font-size: 14px;
  line-height: 1.6;
  color: ${({ darkText }) => (darkText ? "#010606" : "#9a9490")};
`;

export const TechsWrap = styled.div`
  margin-top: 12px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 6px;
`;

export const TechsSpan = styled.div<HTMLAttributes<HTMLDivElement>>`
  font-size: 0.75rem;
  background-color: #2a3135;
  border: 1px solid #3a4549;
  color: #b0b8bc;
  border-radius: 6px;
  padding: 3px 8px;
`;

type proyectTypeProps = HTMLAttributes<HTMLDivElement> & {
  bgColor?: string;
};

export const ProyectTypeSpan = styled.div<proyectTypeProps>`
  width: fit-content;
  font-size: 0.75rem;
  border-radius: 6px;
  padding: 3px 8px;
  margin-bottom: 8px;
  background-color: ${({ bgColor }) => bgColor || "transparent"};
`;

export const BtnWrap = styled.div`
  margin-top: auto;
  padding-top: 16px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

export const ImgWrap = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const Img = styled(Image)`
  object-fit: cover;
`;
