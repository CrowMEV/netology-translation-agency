import './App.scss';

import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import OrderTranslate from './components/orderTranslate/OrderTranslate';
import AboutCompany from "./components/about-company/AboutCompany";
import Languages from "./components/languages/Languages";
import FeaturesTranslate from "./components/features-translate/FeaturesTranslate";
import HowWeWork from "./components/how-we-work/HowWeWork";
import DiscountOffer from "./components/discount-offer/DiscountOffer";
import Discount from "./components/discount/Discount";
import Form from './components/form/Form';
import Contacts from "./components/contacts/Contacts";
import Footer from "./components/footer/Footer";

import BurgerMenu from './components/burgerMenu/BurgerMenu';

/* import Sample from "./store/sample/sample"; */

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header/>
        <Navbar/>
        <BurgerMenu/>
        <OrderTranslate/>
        <AboutCompany/>
        <Languages/>
        <FeaturesTranslate/>
        <HowWeWork/>
        <DiscountOffer/>
        <Discount/>
        <Form/>
       {/*  ** FORM PLACE **
        ** STORE TEST **
        <Sample/>
        ** STORE TEST ENDS** */}
        <Contacts/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
