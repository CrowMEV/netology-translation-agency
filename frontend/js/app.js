// import 'babel-polyfill'
import '../css/app.scss'
import './order-form/order-form'


const menuBurger=document.querySelector('.header__burger')
const menuBurgerActive=document.querySelector('.header__burger_active')

menuBurger.addEventListener('click', function(){
    menuBurgerActive.classList.toggle('active')
})
