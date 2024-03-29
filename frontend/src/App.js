import './App.scss';
import Navbar from './components/navbar/Navbar';
import MainBanner from './components/mainBanner/MainBanner';
import AboutCompany from "./components/about-company/AboutCompany";
import Languages from "./components/languages/Languages";
import FeaturesTranslate from "./components/features-translate/FeaturesTranslate";
import DiscountOffer from "./components/discount-offer/DiscountOffer";
import Discount from "./components/costDependency/СostDependency";
import Contacts from "./components/contacts/Contacts";
import Footer from "./components/footer/Footer";
import BurgerMenu from './components/burgerMenu/BurgerMenu';
import OrderForm from './components/orderForm/OrderForm';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Navbar/>
        <BurgerMenu/>
        <MainBanner/>
        <AboutCompany/>
        <Languages/>
        <FeaturesTranslate/>
        <DiscountOffer/>
        <Discount/>
        <OrderForm/>
        <Contacts/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
