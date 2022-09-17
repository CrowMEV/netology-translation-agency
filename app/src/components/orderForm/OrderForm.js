import React, { useState } from "react";
import Modal from "../modal/Modal";
import "./OrderForm.scss";

function OrderForm() {
  const [modalActive, setModalActive] = useState(true);

  return (
    <>
      {modalActive && <Modal setActive={setModalActive} />}
      <div className="containerWrap">
        <div className="orderForm">
          <section id="orderForm" className="orderForm__translate">
            <h2>Заказать перевод</h2>

            <form id="order-form" name="orderForm" onSubmit={() => {}}>
              <div className="orderForm__input">
                <label htmlFor="initials">Фамилия, имя</label>
                <input
                  type="text"
                  name="initials"
                  className="orderForm__input_style"
                  placeholder="Иванов Иван"
                  required
                />
              </div>

              <div className="orderForm__input">
                <label htmlFor="telephone">Телефон</label>
                <input
                  className="orderForm__input_style"
                  type="number"
                  name="telephone"
                  placeholder="+7 999 9999999"
                  required
                />
              </div>

              <div className="orderForm__input">
                <label htmlFor="email">Email</label>
                <input
                  className="orderForm__input_style"
                  type="email"
                  name="email"
                  placeholder="example@mail.ru"
                  required
                />
              </div>

              <div className="orderForm__select_changeLanguage">
                <label htmlFor="">Язык перевода</label>
                <div className="orderForm__select_changeLanguage_wrap">
                  <div className="orderForm__input_double">
                    <input
                      required={true}
                      type="originalLang"
                      name="originalLang"
                      className="orderForm__input_style"
                      placeholder="английский"
                    />
                  </div>

                  <div className="orderForm__input_double">
                    <input
                      required={true}
                      type="originalLang"
                      name="originalLang"
                      className="orderForm__input_style"
                      placeholder="английский"
                    />
                  </div>
                </div>
              </div>

              <div className="orderForm__file">
                <div className="orderForm__select_changeLanguage_wrap">
                  <div className="orderForm__input_double">
                    <input
                      name="originalLang"
                      className="orderForm__input_style"
                      placeholder="выберите файл"
                      required
                    />
                  </div>
                  <div className="orderForm__input_double">
                    <span className="orderForm__input_style">
                      {" "}
                      файл не выбран
                    </span>
                  </div>
                </div>
              </div>

              <div className="orderForm__textarea">
                <label htmlFor="comment">Дополнительная информация</label>
                <textarea
                  rows="7"
                  className="orderForm__textarea_style"
                  name="comment"
                  placeholder="тематика перевода, предпочитаемый вид оплаты и другое"
                />
              </div>

              <div className="orderForm__privacy">
                <input
                  className="orderForm__privicy_check"
                  required={true}
                  type="checkbox"
                  name="privacy"
                />
                <span>
                  Я подтверждаю, что ознакомлен(а) с{" "}
                  <a href="/" onClick={() => setModalActive(true)}>
                    Политикой конфиденциальности
                  </a>
                </span>
              </div>
              <div className="orderForm__button">
                <button type="submit">Заказать перевод</button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </>
  );
}

export default OrderForm;
