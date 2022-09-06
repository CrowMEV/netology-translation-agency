import React from "react";
import logo from "../../img/socialIcons/logo.svg";
import rewardNavbar from "../../img/rewardNavbar.svg";

function Navbar() {
  return (
    <nav class="containerWrap">
      <div class="navbar">
        <span className="header__logo">
          <img src={logo} alt="алтайская ассоциация" />
        </span>
        <ul class="navbar">
          <li>
            <a href="#aboutCompany">
              <img src={rewardNavbar} alt="награда"/>
            </a>
          </li>
          <li>
            <a href="#aboutCompany">О компании</a>
          </li>
          <li>
            <a href="#languages">Языки для перевода</a>
          </li>
          <li>
            <a href="#form">Заказать перевод</a>
          </li>
          <li>
            <a href="#contacts">Контакты</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
