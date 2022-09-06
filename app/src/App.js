import './App.scss';

//import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import MainBanner from './components/mainBanner/MainBanner';
import AboutCompany from "./components/about-company/AboutCompany";
import Languages from "./components/languages/Languages";
import FeaturesTranslate from "./components/features-translate/FeaturesTranslate";
import DiscountOffer from "./components/discount-offer/DiscountOffer";
import Discount from "./components/costDependency/СostDependency";
import Form from './components/form/Form';
import Contacts from "./components/contacts/Contacts";
import Footer from "./components/footer/Footer";

import BurgerMenu from './components/burgerMenu/BurgerMenu';

/* import Sample from "./store/sample/sample"; */

function App() {
  return (
    <div className="App">
      <div className="container">
        <Navbar/>
        {/* <Header/> */}
        <BurgerMenu/>
        <MainBanner/>
        <AboutCompany/>
        <Languages/>
        <FeaturesTranslate/>
        <DiscountOffer/>
        <Discount/>
        {/* <HowWeWork/> */}
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
