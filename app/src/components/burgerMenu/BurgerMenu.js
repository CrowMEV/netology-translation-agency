import React from 'react'

function BurgerMenu({active,setActive}) {
  return (
   <>
      <aside className={active?"header__burger active":"header__burger"} onClick={()=>setActive(false)}>
    
        <div className="header__burger_close">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className="header__burger_menu">
          <li className="burger__links"><a href="#aboutCompany">О компании</a></li>
          <li className="burger__links"><a href="#languages">Языки для переводов</a></li>
          <li className="burger__links"><a href="#form">Заказать перевод</a></li>
          <li className="burger__links"><a href="#contacts">Контакты</a></li>
        </ul>
      </aside>
      </>
  )
}

export default BurgerMenu