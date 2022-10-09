import React from "react";

function BurgerMenu({ active, setActive }) {
  return (
    <aside
      className={active ? "header__burger active" : "header__burger"}
      onClick={() => setActive(false)}
    >
      <div className="close">
        <span className="material-icons" onClick={() => setActive(false)}>
          close
        </span>
      </div>
      <ul className="header__burger_menu">
        <li className="burger__links">
          <a href="#aboutCompany">О компании</a>
        </li>
        <li className="burger__links">
          <a href="#languages">Языки для переводов</a>
        </li>
        <li className="burger__links">
          <a href="#orderForm">Заказать перевод</a>
        </li>
        <li className="burger__links">
          <a href="#contacts">Контакты</a>
        </li>
      </ul>
    </aside>
  );
}

export default BurgerMenu;
