import React,{useState} from 'react'

import BurgerMenu from '../burgerMenu/BurgerMenu'

import telegram from '../../img/socialIcons/telegram.svg'
import whatsapp from '../../img/socialIcons/whatsapp.svg'
import logo from '../../img/socialIcons/logo.svg'

function Header() {

  const[burger,setBurger]=useState(false)

  return (
   <>
     <header className="header">
    <div className="container">

      <div className="header__menu">
        <div className="header__logo"><img src={logo} alt="алтайская ассоциация"/></div>
        <div className="header__contacts">

          <div className="header__icons">
            <a href="https://telegram.me/ilin_me" target="_blank" rel="noopener noreferrer"><img src={telegram}
                alt="telegram"/></a>
            <a href="https://wa.me/79132765509" target="_blank" rel="noopener noreferrer"><img src={whatsapp}
                alt="whatsapp"/></a>
            
          </div>

          <div className="header__adress">
            <p>Барнаул, ул. Деповская, 7, офис Б-310</p>
            <a href="mailto:perevod_arap@mail.ru" target="_blank" rel="noopener noreferrer">perevod_arap@mail.ru</a>
          </div>

          <div className="header__tel">
            <a href="tel:+73852243947">+7 3852 243947</a>
            <a href="tel:+79132765509">+7 913 2765509</a>
          </div>
        </div>

        <div className="header__burger_icon" onClick={()=>setBurger(!burger)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

<BurgerMenu active={burger} setActive={setBurger} />
       
      </div>


   

    </div>
  </header>
   </>
  )
}

export default Header