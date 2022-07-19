import {
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
    <ContactContainer id="contact">
      <ContactRow>
        <Column1>
          <FormWrapp>
            <ContactTitle>Contacto</ContactTitle>
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
  );
}

export { Contact };
