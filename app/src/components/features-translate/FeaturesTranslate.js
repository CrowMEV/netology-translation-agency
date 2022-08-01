import Science from '../../img/science.svg';
import Document from '../../img/document.svg';
import UrDoc from '../../img/ur-doc.svg';
import Medical from '../../img/medical.svg';
import Tech from '../../img/tech.svg';
import InfoMaterial from '../../img/info-material.svg';
import PrivacyDoc from '../../img/privacy-doc.svg';
import Finance from '../../img/finance.svg';


function FeaturesTranslate() {
  return (
    <section className="featuresTranslate">
      <h2>Переводим тексты любой сложности и тематики</h2>
      <div className="featuresTranslate__wrap">

        <div className="featuresTranslate__item">
          <img src={Science} alt="наука"/>
          <p className="featuresTranslate__item_text">Наука</p>
        </div>

        <div className="featuresTranslate__item">
          <img src={Document} alt="документы для таможни"/>
          <p className="featuresTranslate__item_text">Документы для таможни</p>
        </div>

        <div className="featuresTranslate__item">
          <img src={UrDoc} alt="Юридические документы"/>
          <p className="featuresTranslate__item_text">Юридические документы</p>
        </div>

        <div className="featuresTranslate__item">
          <img src={Medical} alt="Медицина"/>
          <p className="featuresTranslate__item_text">Медицина</p>
        </div>

        <div className="featuresTranslate__item">
          <img src={Tech} alt="Техника"/>
          <p className="featuresTranslate__item_text">Техника</p>
        </div>

        <div className="featuresTranslate__item">
          <img src={InfoMaterial} alt="информационные материалы"/>
          <p className="featuresTranslate__item_text">Рекламно-информационные материалы</p>
        </div>

        <div className="featuresTranslate__item">
          <img src={PrivacyDoc} alt="Личные документы"/>
          <p className="featuresTranslate__item_text">Личные документы</p>
        </div>

        <div className="featuresTranslate__item">
          <img src={Finance} alt="Финансы"/>
          <p className="featuresTranslate__item_text">Финансы</p>
        </div>
      </div>
    </section>
  )
}

export default FeaturesTranslate;
