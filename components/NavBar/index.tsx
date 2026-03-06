import { FaBars } from "react-icons/fa";
import { animateScroll } from "react-scroll";
import {
  MobileMenuIcon,
  Nav,
  NavBarContainer,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu,
} from "./navElements";

type props = {
  toggle: () => any;
};

export function NavBar(props: props) {
  function scrollTop() {
    animateScroll.scrollToTop();
  }

  return (
    <Nav>
      <NavBarContainer>
        <NavLogo href="#hero" to="hero" onClick={() => scrollTop()}>
          Denis
        </NavLogo>
        <MobileMenuIcon onClick={props.toggle}>
          <FaBars></FaBars>
        </MobileMenuIcon>
        <NavMenu>
          <NavItem>
            <NavLinks
              href="#about"
              to="about"
              smooth={true}
              duration={500}
              spy={true}
            >
              About Me
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              href="#proyects"
              to="proyects"
              smooth={true}
              duration={500}
              spy={true}
              activeClass={"active"}
            >
              Projects
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              href="#technologies"
              to="technologies"
              smooth={true}
              duration={500}
              spy={true}
            >
              Technologies
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              href="#contact"
              to="contact"
              smooth={true}
              duration={500}
              spy={true}
            >
              Contact
            </NavLinks>
          </NavItem>
        </NavMenu>
      </NavBarContainer>
    </Nav>
  );
}
