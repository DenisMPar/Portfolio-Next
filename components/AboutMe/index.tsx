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
              <Heading ligthText={true}>About Me</Heading>
              <Subtitle darkText={false}>
                Hi! My name is Denis, and I{"'"}m a Frontend Developer.
                <br /><br />
                I enjoy building products that deliver outstanding user
                experiences and stand out visually.
                Over the past three years, I{"'"}ve worked closely with design
                teams — building projects from scratch and
                continuously improving existing systems. My focus: implementing interfaces,
                optimizing user flows, creating reusable components, and solving
                usability problems.
                <br /><br />
                Along the way, I{"'"}ve strengthened skills like collaborative
                teamwork, adaptability to different technologies, and the ability
                to turn complex requirements into clear, functional solutions.
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
