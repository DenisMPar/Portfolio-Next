import {
  ContactSection,
  ContactContainer,
  ContactTitle,
  FormWrapp,
  ContactRow,
  Column1,
  Column2,
  ImgWrap,
  Img,
} from "./contactElements";
import { ContactForm } from "../ContactForm";

function Contact() {
  return (
    <ContactSection id="contact">
    <ContactContainer>
      <ContactRow>
        <Column1>
          <FormWrapp>
            <ContactTitle>Contact</ContactTitle>
            <ContactForm></ContactForm>
          </FormWrapp>
        </Column1>
        <Column2>
          <ImgWrap>
            <Img />
          </ImgWrap>
        </Column2>
      </ContactRow>
    </ContactContainer>
    </ContactSection>
  );
}

export { Contact };
