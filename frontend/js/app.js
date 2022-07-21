// import 'babel-polyfill'
import '../css/app.scss'
import './order-form/order-form'


const menuBurger=document.querySelector('.header__burger')

const menuBurgerLinks=document.querySelector('.header__burger_menu')

const menuBurgerActive=document.querySelector('.header__burger_active')


/* menuBurger.addEventListener('click', function(e){
    document.body.classList.toggle("lock")
    menuBurgerActive.classList.toggle('active')
})
menuBurgerLinks.addEventListener('click', function(e){
    document.body.classList.toggle("lock")
    menuBurgerActive.classList.toggle('active')
}) */

menuBurger.onclick=()=>toggleBurger()
menuBurgerLinks.onclick=()=>toggleBurger()

function toggleBurger(){
           document.body.classList.toggle("lock")
        menuBurgerActive.classList.toggle('active')
  
}