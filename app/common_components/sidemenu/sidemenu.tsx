"use client";
import { useState } from "react";
import "../sidemenu/sidemenu.css";


const SideMenu = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="hamburger-menu relative z-50">
      <label className="menu__btn" htmlFor="menu__toggle">
        <input id="menu__toggle" key="menu__toggle" type="checkbox" onClick={() => setIsChecked(!isChecked)} />
        <span></span>
      </label>

      <ul className="menu__box" style={isChecked === true ? { right: "0" } : {}}>
        <li><a className="menu__item" href="https://opensea.io/collection/kaiju-kingz">OpenSea</a></li>
        <li><a className="menu__item" href="https://discord.gg/kaiju-kingz">Discord</a></li>
        <li><a className="menu__item" href="https://twitter.com/KaijuKingz">Twitter</a></li>
        <li><a className="menu__item" href="#">Lessons</a></li>
        <li><a className="menu__item" href="#">Disclaimer</a></li>
      </ul>
    </div>
  );
};

export default SideMenu;