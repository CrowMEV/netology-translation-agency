import React, { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { sendOrder } from "../../api";
import { langs } from "../form/langs";
import Modal from "../modal/Modal";
import { ERROR_MESSAGE } from "./constants";
import "./OrderForm.scss";
import { getFileArr } from "./utils";

function OrderForm() {
  const [modalActive, setModalActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sucsess, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  const watchFile = watch("file");
  const files = useMemo(() => getFileArr(watchFile), [watchFile]);

  const onSubmit = async (data) => {
    const formData = new FormData();
    getFileArr(data.file).forEach((file, idx) => {
      formData.append(`file[${idx}]`, data.file[idx]);
    });
    formData.append("name", data.name);
    formData.append("telephone", data.telephone);
    formData.append("email", data.email);
    formData.append("original_l", data.original_l);
    formData.append("translate_l", data.translate_l);
    formData.append("comment", data.comment);
    formData.append("privacy", data.privacy);
    const res = await fetch("http://localhost:8000/send_mail", {
      mode: 'cors',
      method: "POST",
      body: formData,
    }).then((res) => res.json());
    alert(JSON.stringify(`${res.message}, status: ${res.status}`));

    // try {
    //   setLoading(true);
    //   await sendOrder(formData);
    //   reset();
    //   setSuccess(true);
    // } catch (err) {
    //   console.error(err);
    //   alert("Не удалось отправить запрос");
    // } finally {
    //   setLoading(false);
    // }
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
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="orderForm__input">
                <label htmlFor="name">Фамилия, имя</label>
                <input
                  {...register("name", {
                    maxLength: 30,
                    minLength: {
                      value: 4,
                      message: "*некорректное имя",
                    },
                    required: true,
                  })}
                  type="text"
                  className="orderForm__input_style"
                  placeholder="Иванов Иван"
                />
                {errors.name?.type === "required" && (
                  <p className="orderForm__error">
                    {errors?.name?.message || ERROR_MESSAGE}
                  </p>
                )}
              </div>

              <div className="orderForm__input">
                <label htmlFor="telephone">Телефон</label>
                <input
                  {...register("telephone", {
                    pattern: {
                      value: /^[0-9+][0-9()-]{4,14}\d$/,
                      message: "*некорректный формат телефона",
                    },
                    minLength: {
                      value: 6,
                      message: "*некорректный формат телефона",
                    },
                    maxLength: {
                      value: 15,
                      message: "*некорректный формат телефона",
                    },
                    required: true,
                  })}
                  className="orderForm__input_style"
                  type="tel"
                  placeholder="123-456-7890"
                />
                {errors?.telephone && (
                  <p className="orderForm__error">
                    {errors?.telephone?.message || ERROR_MESSAGE}
                  </p>
                )}
              </div>

              <div className="orderForm__input">
                <label htmlFor="email">Email</label>
                <input
                  {...register("email", {
                    pattern: {
                      value: /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i,
                      message: "*некорректный email",
                    },
                    required: true,
                  })}
                  className="orderForm__input_style"
                  type="email"
                  placeholder="example@mail.ru"
                />
                {errors?.email && (
                  <p className="orderForm__error">
                    {errors?.email?.message || ERROR_MESSAGE}
                  </p>
                )}
              </div>

              <div className="orderForm__select_changeLanguage">
                <label htmlFor="">Язык перевода</label>
                <div className="orderForm__select_changeLanguage_wrap">
                  <div className="orderForm__input_double">
                    <select
                      {...register("original_l", { required: true })}
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
                    {errors?.original_l && (
                      <p className="orderForm__error">{ERROR_MESSAGE}</p>
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
                    {errors?.translate_l && (
                      <p className="orderForm__error">{ERROR_MESSAGE}</p>
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
                      multiple
                      {...register("file", {
                        accept: {
                          value:
                            ".jpg, .jpeg, .png, .zip, .doc, .docx, .pdf, .djvu",
                          message: "*недопустимый формат файла",
                        },
                        required: false,
                      })}
                    />
                    {errors?.file && (
                      <p className="orderForm__error">
                        {errors?.file?.message || "*файл не выбран"}
                      </p>
                    )}
                  </div>
                  <div className="orderForm__file-list">
                    {" "}
                    {files.map((el, idx) => (
                      <span key={idx}>{el.name}</span>
                    ))}
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
                  {errors?.privacy && (
                    <p className="error">*необходимо подтверждение</p>
                  )}
                </span>
              </div>

              <div className="orderForm__button">
                <button type="submit">
                  {loading ? "Отправка..." : "Заказать перевод"}
                </button>
                {sucsess && (
                    <p className="orderForm__sucsess">
                    <i class="material-icons">done</i>Заказ успешно отправлен
                    </p>
                )}
              </div>
            </form>
          </section>
        </div>
      </div>
    </>
  );
}

export default OrderForm;