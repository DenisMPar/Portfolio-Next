import { useState } from "react";
import { NavBar } from "../NavBar";
import { SideBar } from "../SideBar";

function Header() {
  const [flag, setFlag] = useState(false);

  function toggleMenu() {
    setFlag(!flag);
  }

  return (
    <>
      <SideBar show={flag} toggle={toggleMenu}></SideBar>

      <NavBar toggle={toggleMenu}></NavBar>
    </>
  );
}

export { Header };
