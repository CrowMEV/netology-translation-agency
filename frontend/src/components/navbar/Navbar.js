import React, { useState } from "react";
import logo from "../../img/socialIcons/logo.svg";
import rewardNavbar from "../../img/rewardNavbar.png";
import BurgerMenu from "../burgerMenu/BurgerMenu";
import burgerIcon from "../../img/burgerIcon.svg";

function Navbar() {
  const [activeBurger, setActiveBurger] = useState(false);

  return (
    <div className="containerSticky">
      <nav className="containerWrap">
        <div className="navbar">
          <span className="header__logo">
            <a href="#aboutCompany">
              <img src={logo} alt="алтайская ассоциация" />
            </a>
          </span>
          <ul className="navbar">
            <li>
              <a href="#aboutCompany">
                <img src={rewardNavbar} alt="награда" />
              </a>
            </li>
            <div className="navbar hidden">
              <li>
                <a href="#aboutCompany">О компании</a>
              </li>
              <li>
                <a href="#languages">Языки для перевода</a>
              </li>
              <li>
                <a href="#orderForm">Заказать перевод</a>
              </li>
              <li>
                <a href="#contacts">Контакты</a>
              </li>
            </div>
            <li className="burger">
              <img
                className="burger"
                onClick={() => setActiveBurger(true)}
                src={burgerIcon}
                alt="меню"
              ></img>
            </li>
            {activeBurger && (
              <div classNmae="hidden">
                <BurgerMenu active={activeBurger} setActive={setActiveBurger} />
              </div>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
