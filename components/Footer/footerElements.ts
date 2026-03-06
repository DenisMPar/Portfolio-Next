import { HTMLAttributes } from "react";
import styled from "styled-components";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import Image from "next/future/image";

export const MyFooter = styled.div<HTMLAttributes<HTMLDivElement>>`
  color: #fff;
  padding: 48px 24px;
  background-color: #0a0a0d;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const FooterTitle = styled.h2<HTMLAttributes<HTMLHeadingElement>>`
  font-size: 1.5rem;
`;
export const ContainerCopy = styled.div<HTMLAttributes<HTMLDivElement>>`
  font-size: 0.8rem;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #d1d1d1;
`;

export const SocialMediaWrapp = styled.div<HTMLAttributes<HTMLDivElement>>`
  width: 100%;
  max-width: 600px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const Img = styled(Image)`
  width: 85%;
  height: 100%;
`;

export const ApxLogo = styled.div<HTMLAttributes<HTMLDivElement>>`
  background-color: #c8c0b8;
  padding: 5px;
  height: 100%;
  max-height: 50px;
  object-fit: cover;
  align-items: center;
  justify-content: center;
  display: flex;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #ffffff;
  }
  @media screen and (max-width: 480px) {
    max-width: 50px;
  }
`;
export const GithubLogo = styled(BsGithub)`
  color: #c8c0b8;
  width: 50px;
  height: 100%;
  cursor: pointer;
  &:hover {
    color: #ffffff;
  }
  @media screen and (max-width: 480px) {
    width: 30px;
  }
`;
export const LinkedinLogo = styled(BsLinkedin)`
  color: #c8c0b8;
  width: 50px;
  height: 100%;
  cursor: pointer;
  &:hover {
    color: #ffffff;
  }
  @media screen and (max-width: 480px) {
    width: 30px;
  }
`;
export const GmailLogo = styled(SiGmail)`
  color: #c8c0b8;
  width: 50px;
  height: 100%;
  cursor: pointer;
  &:hover {
    color: #ffffff;
  }
  @media screen and (max-width: 480px) {
    width: 30px;
  }
`;
