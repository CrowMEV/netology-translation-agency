import React from "react";

function OrderForm() {
  return (
    <div className="containerWrap">
      <div className="form">
        <section id="form" className="form__translate">
          <h2>Заказать перевод</h2>

          <form id="order-form" name="orderForm" onSubmit={() => {}}>
            <div className="form__input">
              <label htmlFor="initials">Фамилия, имя</label>
              <input
                type="text"
                name="initials"
                className="form__input_style"
                placeholder="Иванов Иван"
                required
              />
            </div>

            <div className="form__input">
              <label htmlFor="telephone">Телефон</label>
              <input
                className="form__input_style"
                type="number"
                name="telephone"
                placeholder="+7 999 9999999"
                required
              />
            </div>

            <div className="form__input">
              <label htmlFor="email">Email</label>
              <input
                className="form__input_style"
                type="email"
                name="email"
                placeholder="example@mail.ru"
                required
              />
            </div>

            <div className="form__select_changeLanguage">
              <label htmlFor="">Язык перевода</label>
              <div className="form__select_changeLanguage_wrap">
                <div className="form__input_double">
                  <input
                    required={true}
                    type="originalLang"
                    name="originalLang"
                    className="form__input_style"
                    placeholder="английский"
                  />
                </div>

                <div className="form__input_double">
                  <input
                    required={true}
                    type="originalLang"
                    name="originalLang"
                    className="form__input_style"
                    placeholder="английский"
                  />
                </div>
              </div>
            </div>

            <div className="form__file">
              <div className="form__select_changeLanguage_wrap">
                <div className="form__input_double">
                  <input
                    name="originalLang"
                    className="form__input_style"
                    placeholder="выберите файл"
                    required
                  />
                </div>
                <div className="form__input_double">
                  <span className="form__input_style"> файл не выбран</span>
                </div>
              </div>
            </div>

            <div className="form__textarea">
              <label htmlFor="comment">Дополнительная информация</label>
              <textarea
                rows="7"
                className="form__textarea_style"
                name="comment"
                placeholder="тематика перевода, предпочитаемый вид оплаты и другое"
              />
            </div>

            <div className="form__privacy">
              <input
                className="form__privicy_check"
                required={true}
                type="checkbox"
                name="privacy"
              />
              <span>
                Я подтверждаю, что ознакомлен(а) с{" "}
                <a href="/">Политикой конфиденциальности</a>
              </span>
            </div>
            <div className="form__button">
              <button type="submit">Заказать перевод</button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}

export default OrderForm;
