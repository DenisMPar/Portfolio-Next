import styled from "styled-components";
import { ContactIcon } from "ui/icons";

export const ContactContainer = styled.div`
  display: grid;
  z-index: 1;
  min-height: 100vh;
  height: 100%;
  width: 100%;
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
  padding: 80px 60px 60px 60px;
  justify-content: center;
  @media screen and (max-width: 769px) {
    padding: 80px 40px 40px 40px;
  }
  @media screen and (max-width: 480px) {
    padding: 80px 20px 20px 20px;
  }
`;

export const ContactRow = styled.div`
  height: 100%;
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

export const FormWrapp = styled.div`
  max-width: 540px;
  padding: 0;
`;
export const ContactTitle = styled.h1`
  margin-top: 20px;
  margin-bottom: 16px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 700;
  color: "#FF6136";
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;
export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
  min-height: 200px;
`;
export const Img = styled(ContactIcon)`
  min-height: 200px;
  width: 100%;
  margin: 0 0 10px 0;
  padding: 0;
`;
