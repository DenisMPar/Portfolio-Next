import { useSpring } from "react-spring";
import {
  HeroBackGround,
  HeroContainer,
  HeroContent,
  HeroP,
  HeroTitle,
  VideoBackGround,
} from "./heroElements";

function Hero() {
  const styled = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 300,
    config: {
      duration: 1500,
    },
  });
  return (
    <HeroContainer id="hero">
      <HeroBackGround style={styled}>
        <VideoBackGround
          autoPlay
          loop
          muted
          src={
            "https://player.vimeo.com/external/368782010.sd.mp4?s=a1478e7348ee04a92761efb2a0420e5750604c38&profile_id=165&oauth2_token_id=57447761"
          }
        />
      </HeroBackGround>
      <HeroContent>
        <HeroTitle>Denis Parada</HeroTitle>
        <HeroP>Desarrollador Web Fullstack </HeroP>
      </HeroContent>
    </HeroContainer>
  );
}

export { Hero };
