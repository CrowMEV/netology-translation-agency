import Language from '../../img/language.svg';
import Subject from '../../img/subject.svg';
import Deadline from '../../img/deadline.svg';
import Size from '../../img/size.svg';


function Discount() {
  return (
    <section className="discount">
      <h2>Что влияет на стоимость?</h2>
      <div className="discount__wrap">
        <div className="discount__item">
          <img src={Language} alt="Язык"/>
          <p className="discount__item_text">Язык</p>
        </div>
        <div className="discount__item">
          <img src={Subject} alt="Тематика"/>
          <p className="discount__item_text">Тематика</p>
        </div>
        <div className="discount__item">
          <img src={Deadline} alt="Сроки"/>
          <p className="discount__item_text">Сроки</p>
        </div>
        <div className="discount__item">
          <img src={Size} alt="Объём"/>
          <p className="discount__item_text">Объём</p>
        </div>
      </div>
    </section>
  )
}

export default Discount;
