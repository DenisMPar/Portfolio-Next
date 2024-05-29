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
            "https://videos.pexels.com/video-files/3130182/3130182-hd_1280_720_30fps.mp4"
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
