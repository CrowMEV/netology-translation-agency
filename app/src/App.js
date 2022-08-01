import './App.scss';
import AboutCompany from "./components/about-company/AboutCompany";
import Languages from "./components/languages/Languages";
import FeaturesTranslate from "./components/features-translate/FeaturesTranslate";
import Footer from "./components/footer/Footer";
import Contacts from "./components/contacts/Contacts";
import Discount from "./components/discount/Discount";
import DiscountOffer from "./components/discount-offer/DiscountOffer";
import HowWeWork from "./components/how-we-work/HowWeWork";

function App() {
  return (
    <div className="App">
      <div className="container">
        <AboutCompany/>
        <Languages/>
        <FeaturesTranslate/>
        <HowWeWork/>
        <DiscountOffer/>
        <Discount/>
        ** FORM PLACE **
        <Contacts/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
