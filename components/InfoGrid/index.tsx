import {
  InfoGridCont,
  InfoGridRow,
  InfoGridWrapp,
  Column1,
  Column2,
  Heading,
  ImgWrap,
  Subtitle,
  TextWrapp,
  BtnWrap,
  TechsWrap,
  TechsSpan,
  Img,
  TitleWrapp,
  ProyectTypeSpan,
} from "./infoGridElements";
import { Button } from "../../ui/button";
import Tilt from "react-parallax-tilt";

type props = {
  type: "info" | "proyect";
  title: string;
  subtitle: string;
  img: any;
  webLink?: string;
  gitHubLink?: string;
  techs: object;
  proyectType: string;
};

function InfoGrid(props: props) {
  return (
    <InfoGridCont>
      <InfoGridWrapp>
        <InfoGridRow>
          <Column1>
            <TextWrapp>
              <Heading ligthText={true}>{props.title}</Heading>
              <ProyectTypeSpan
                style={{
                  backgroundColor: `${
                    props.proyectType == "Profesional" ? "#c26332" : "#404949"
                  }`,
                }}
              >
                {props.proyectType}
              </ProyectTypeSpan>

              <Subtitle darkText={false}>{props.subtitle}</Subtitle>
            </TextWrapp>
            {props.type == "proyect" ? (
              <>
                <TechsWrap>
                  Tecnologías:
                  {Object.entries(props.techs).map((item) => {
                    return <TechsSpan key={item[1]}>{item[1]}</TechsSpan>;
                  })}
                </TechsWrap>
                <BtnWrap>
                  <a
                    href={props.webLink}
                    style={{ textDecoration: "none" }}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button>Proyecto</Button>
                  </a>
                  {props.gitHubLink ? (
                    <a
                      href={props.gitHubLink}
                      style={{ textDecoration: "none" }}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Button>Código</Button>
                    </a>
                  ) : null}
                </BtnWrap>
              </>
            ) : null}
          </Column1>
          <Column2>
            <Tilt>
              <ImgWrap>
                <Img
                  width={500}
                  height={400}
                  alt={"icon of " + props.title}
                  src={"https:" + props.img}
                />
              </ImgWrap>
            </Tilt>
          </Column2>
        </InfoGridRow>
      </InfoGridWrapp>
    </InfoGridCont>
  );
}

export { InfoGrid };
