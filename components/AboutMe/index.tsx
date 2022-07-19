import {
  AboutMeCont,
  AboutMeRow,
  AboutMeWrapp,
  Column1,
  Column2,
  Heading,
  Img,
  ImgWrap,
  Subtitle,
  TextWrapp,
} from "./aboutMeElements";

function AboutMe() {
  return (
    <AboutMeCont lightBack={false} id="about">
      <AboutMeWrapp>
        <AboutMeRow>
          <Column1>
            <TextWrapp>
              <Heading ligthText={true}>Acerca de mi</Heading>
              <Subtitle darkText={false}>
                Me inicie en el mundo de la programación hace más de un año.
                Actualmente me encuentro estudiando la carrera de desarrollo web
                fullstack en apx.school. Soy una persona autodidacta que le
                gusta aprender y capacitarse para lograr cada vez mejores
                resultados. Me gusta la tecnología, tanto el software como el
                hardware y admiro la capacidad que tiene la web para conectarnos
                y mejorar la vida de las personas día a día, por esta razón,
                decidí convertirme en programador.
              </Subtitle>
            </TextWrapp>
          </Column1>
          <Column2>
            <ImgWrap>
              <Img />
            </ImgWrap>
          </Column2>
        </AboutMeRow>
      </AboutMeWrapp>
    </AboutMeCont>
  );
}

export { AboutMe };
