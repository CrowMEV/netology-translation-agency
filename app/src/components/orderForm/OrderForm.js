import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { langs } from "../form/langs";
import Modal from "../modal/Modal";
import "./OrderForm.scss";

function OrderForm() {
  const [modalActive, setModalActive] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const sendData = (data) => {
    const opt = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    };
    return fetch('/user/login', opt)
      .then((res) => console.log("data", res))
      .catch((error) => {
        console.log("error", error);
      });
  };

  return (
    <>
      {modalActive && <Modal setActive={setModalActive} />}
      <div className="containerWrap">
        <div className="orderForm">
          <section id="orderForm" className="orderForm__translate">
            <h2>Заказать перевод</h2>

            <form
              id="order-form"
              name="order-form"
              onSubmit={handleSubmit(sendData)}
            >
              <div className="orderForm__input">
                <label htmlFor="name">Фамилия, имя</label>
                <input
                  {...register("name", { required: true })}
                  type="text"
                  className="orderForm__input_style"
                  placeholder="Иванов Иван"
                />
                {errors.name?.type === "required" && (
                  <span>Это поле обязательное</span>
                )}
              </div>

              <div className="orderForm__input">
                <label htmlFor="telephone">Телефон</label>
                <input
                  {...register("telephone", { required: true })}
                  className="orderForm__input_style"
                  type="number"
                  placeholder="+7 999 9999999"
                />
                {errors.telephone && <span>Это поле обязательное</span>}
              </div>

              <div className="orderForm__input">
                <label htmlFor="email">Email</label>
                <input
                  {...register("email", { required: true })}
                  className="orderForm__input_style"
                  type="email"
                  placeholder="example@mail.ru"
                />
                {errors.email && <span>Это поле обязательное</span>}
              </div>

              <div className="orderForm__select_changeLanguage">
                <label htmlFor="">Язык перевода</label>
                <div className="orderForm__select_changeLanguage_wrap">
                  <div className="orderForm__input_double">
                    <select {...register("original_l", { required: true })}
                      className="orderForm__input_style"
                      id="original_l"
                      form="order-form"
                    >
                      {langs.map((el, index) => (
                        <option key={index} value={el}>
                          c {el}
                        </option>
                      ))}
                    </select>
                    {errors.original_l && (
                      <span>Это поле обязательное</span>
                    )}
                  </div>

                  <div className="orderForm__input_double">
                    <select
                      {...register("translate_l", { required: true })}
                      className="orderForm__input_style"
                      id="translate_l"
                      form="order-form"
                    >
                      {langs.map((el, index) => (
                        <option key={index} value={el}>
                          на {el}
                        </option>
                      ))}
                    </select>
                    {errors.translate_l && (
                      <span>Это поле обязательное</span>
                    )}
                  </div>
                </div>
              </div>

              <div className="orderForm__file">
                <div className="orderForm__select_changeLanguage_wrap">
                  <div className="orderForm__input_double">
                    <label htmlFor="file" className="orderForm__file_upload">
                      <i class="material-icons">file_upload</i> Выберите файл
                    </label>
                    <input
                      id="file"
                      type="file"
                      {...register("file", { required: true })}
                    />
                    {errors.file && (
                      <span>Это поле обязательное</span>
                    )}
                  </div>
                </div>
              </div>

              <div className="orderForm__textarea">
                <label htmlFor="comment">Дополнительная информация</label>
                <textarea
                  {...register("comment")}
                  rows="7"
                  className="orderForm__textarea_style"
                  placeholder="тематика перевода, предпочитаемый вид оплаты и другое"
                />
              </div>

              <div className="orderForm__privacy">
                <input
                  {...register("privacy", { required: true })}
                  className="orderForm__privicy_check"
                  type="checkbox"
                />
                {errors.privacy && <span>Это поле обязательное</span>}
                <span>
                  Я подтверждаю, что ознакомлен(а) с{" "}
                  <a
                    href="/"
                    onClick={(e) => {
                      setModalActive(true);
                      e.preventDefault();
                    }}
                  >
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
