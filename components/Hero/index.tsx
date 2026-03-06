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
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const styled = useSpring({
    to: { opacity: 1 },
    from: { opacity: prefersReducedMotion ? 1 : 0 },
    delay: prefersReducedMotion ? 0 : 300,
    config: {
      duration: prefersReducedMotion ? 0 : 1500,
    },
  });
  return (
    <HeroContainer id="hero">
      <HeroBackGround style={styled}>
        <VideoBackGround
          playsInline
          autoPlay={!prefersReducedMotion}
          loop
          muted
          src={
            "https://videos.pexels.com/video-files/3130182/3130182-hd_1280_720_30fps.mp4"
          }
        />
      </HeroBackGround>
      <HeroContent>
        <HeroTitle>Denis Parada</HeroTitle>
        <HeroP>Frontend Developer</HeroP>
      </HeroContent>
    </HeroContainer>
  );
}

export { Hero };
