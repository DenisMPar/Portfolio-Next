import { ComponentPropsWithoutRef } from "react";
import MyContactIcon from "images/contact.svg";
import MyAboutMeIcon from "images/aboutMe.svg";

type IconProps = ComponentPropsWithoutRef<"div">;

export function ContactIcon({ className }: IconProps) {
  return (
    <div className={className}>
      <MyContactIcon style={{ width: "100%" }} alt="Contact icon" />
    </div>
  );
}

export function AboutMeIcon({ className }: IconProps) {
  return (
    <div className={className}>
      <MyAboutMeIcon style={{ width: "100%" }} alt="About me icon" />
    </div>
  );
}
