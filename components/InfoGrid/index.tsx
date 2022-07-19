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
};

function InfoGrid(props: props) {
  return (
    <InfoGridCont>
      <InfoGridWrapp>
        <InfoGridRow>
          <Column1>
            <TextWrapp>
              <Heading ligthText={true}>{props.title}</Heading>
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
                  <a
                    href={props.gitHubLink}
                    style={{ textDecoration: "none" }}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button>Código</Button>
                  </a>
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
