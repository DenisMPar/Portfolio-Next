import { HTMLAttributes } from "react";
import styled from "styled-components";
import { Link as LinkScroll } from "react-scroll";

export const Nav = styled.nav<HTMLAttributes<HTMLElement>>`
  background: #0a0a0d;
  height: 80px;
  margin-bottom: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: background-color 0.8s ease;
  }
`;

export const NavBarContainer = styled.div<HTMLAttributes<HTMLDivElement>>`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1400px;
`;
export const NavLogo = styled(LinkScroll)`
  color: white;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;
export const MobileMenuIcon = styled.div<HTMLAttributes<HTMLDivElement>>`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: white;
  }
`;
export const NavMenu = styled.ul<HTMLAttributes<HTMLUListElement>>`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li<HTMLAttributes<HTMLLIElement>>`
  height: 80px;
`;
export const NavLinks = styled(LinkScroll)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:hover {
    color: #f5f0eb;
  }

  &:focus-visible {
    outline: 2px solid #f5f0eb;
    outline-offset: -2px;
  }

  &.active {
    border-bottom: 5px solid #9a9490;
  }
`;
