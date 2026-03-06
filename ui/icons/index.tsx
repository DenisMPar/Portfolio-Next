import MyContactIcon from "images/contact.svg";
import MyAboutMeIcon from "images/aboutMe.svg";

export function ContactIcon() {
  return (
    <div>
      <MyContactIcon style={{ width: "100%" }} alt="Contact icon" />
    </div>
  );
}
export function AboutMeIcon() {
  return (
    <div>
      <MyAboutMeIcon style={{ width: "100%" }} alt="About me icon" />
    </div>
  );
}
