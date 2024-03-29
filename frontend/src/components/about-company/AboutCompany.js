import premium from "../../img/premium.svg";

function AboutCompany() {
  return (
    <div className="containerWrap">
      <section id="aboutCompany" className="aboutCompany">
        <h2>О компании</h2>
        <p>
          Переводим с 2002 года. Работаем с российскими и зарубежными клиентами,
          юридическими и физическими лицами. В штате опытные дипломированные переводчики, мы работаем с текстами
          любой сложности и тематики. Сотрудничаем с носителями языка и
          экспертами, обладающими специализированными знаниями и лексикой.
          Постоянно привлекаем новых специалистов и расширяем перечень языков.
        </p>
        <p>
          Находимся в самом сердце города — к нам легко добраться с любого
          направления на личном и общественном транспорте.
        </p>
        <div className="aboutCompany__premiumWrap">
        <img className="aboutCompany__img" src={premium} alt="премия" />
          <p> 
            “Алтайская региональная ассоциация переводчиков” — лауреат
            престижной бизнес-премии "Выбор клиентов и партнеров 2021" по версии
            Межотраслевой рейтинговой компании.
          </p>
        </div>
      </section>
    </div>
  );
}

export default AboutCompany;
