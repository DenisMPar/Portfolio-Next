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
                Programador fullstack con experiencia en desarrollo web. He
                trabajado en diversos proyectos, adquiriendo habilidades tanto
                en el desarrollo frontend como en el backend. Disfruto de la
                creación de interfaces atractivas y la implementación de
                soluciones eficientes. Siempre estoy abierto a nuevos desafíos y
                en constante aprendizaje para mejorar mis habilidades. <br />
                Si tu objetivo es contratar un desarrollador versátil, que se
                destaque por su pasión a la hora de desarrolllar interfaces y
                que a su vez pueda colaborar en el desarrollo de APIs, soy la
                persona que buscas.
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
