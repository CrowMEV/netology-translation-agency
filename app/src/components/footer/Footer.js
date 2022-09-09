function Footer() {
  return (
    <footer className="footer">
      <div className="containerWrap">
        <div className="footer__wrap">
          <nav className="footer__nav">
            <ul className="footer__nav_list">
              <li className="footer__nav_item">
                <a href="#aboutCompany">О компании</a>
              </li>
              <li className="footer__nav_item">
                <a href="#languages">Языки для перевода</a>
              </li>
              <li className="footer__nav_item">
                <a href="#contacts">Контакты</a>
              </li>
            </ul>
          </nav>
          <div className="footer__text">
            <p>
              Для оформления заявки по e-mail напишите на perevod_arap@mail.ru.
              В поле «Тема» укажите: «Заказ на перевод».
              <br />
              Укажите контактные данные: телефон, адрес электронной почты и
              контактное лицо. <br />    Пожалуйста, напишите на какой язык требуется
              выполнить перевод, тематику и примерный объем текста, сроки, нужно
              ли Вам заверять перевод (нотариально или нашими печатями). <br />
              Это поможет нам учесть все особенности Вашего заказа и ответить на
              все вопросы.
            </p>
          </div>
        </div>
        <div className="footer__copyright">&#169; Netology 2022</div>
      </div>
    </footer>
  );
}

export default Footer;
