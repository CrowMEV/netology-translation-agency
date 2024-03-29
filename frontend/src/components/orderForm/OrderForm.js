import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { sendOrder } from "../../api";
import { langs, langsInflected } from "./langs";
import Modal from "../modal/Modal";
import { ERROR_MESSAGE } from "./constants";
import "./OrderForm.scss";

function OrderForm() {
  const [modalActive, setModalActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false); 
  const [errorFileSize, setErrorFileSize] = useState(false);
  const [errorSubmit, setErrorSubmit] = useState(false);
  const [filesArr, setFilesArr] = useState([]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  const validateSize = (files) => {
    let filesSize = 0; // in MiB
    const kbInMb = 1024 * 1024;
    
    for(let i = 0; i < files?.length; i++) {
      filesSize += files[i].size / kbInMb;
    }

    setErrorFileSize(filesSize > 5);
  }

  useEffect(() => {
    validateSize(filesArr);
  }, [filesArr]);

  const getFileArr = (filelist) => {
    const files = [];

    if (filelist) {
      for (let i = 0; i < filelist.length; i++) {
        files.push(filelist.item(i));
      }
    }

    return files;
  };

  const handleFileChanged = (e) => {
    const files = getFileArr(e.target.files);
    setFilesArr(files);
  };

  const handleDeleteFile = (name) => {
    const newFilesArr= filesArr.filter(el => el.name !== name);
    setFilesArr(newFilesArr);
  }

  const onSubmit = async (data) => {
    setErrorSubmit(false);
    setSuccess(false);

    if (errorFileSize) {
      return;
    }

    const formData = new FormData();
    filesArr.forEach((file, idx) => {
      formData.append(`file[${idx}]`, file);
    });

    formData.append("name", data.name);
    formData.append("telephone", data.telephone);
    formData.append("email", data.email);
    formData.append("original_l", data.original_l);
    formData.append("translate_l", data.translate_l);
    formData.append("comment", data.comment);
    formData.append("privacy", data.privacy);

    const response = await sendOrder(formData);

    if (response.status === 200) {
      reset();
      setLoading(false);
      setSuccess(true);
    } else {
      setLoading(false);
      setErrorSubmit(true);
    }
  };

  return (
    <>
      {modalActive && <Modal setActive={setModalActive} />}
      <div className="containerWrap">
        <section id="orderForm" className="orderForm">
          <div className="orderForm__translate">
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
                      value: 2,
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
                      value: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
                      message: "*некорректный формат телефона",
                    },
                    minLength: {
                      value: 6,
                      message: "*некорректный формат телефона",
                    },
                    maxLength: {
                      value: 20,
                      message: "*некорректный формат телефона",
                    },
                    required: true,
                  })}
                  className="orderForm__input_style"
                  type="tel"
                  placeholder="+7(ХХХ)ХХХ-ХХ-ХХ"
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
                      className="orderForm__input_style select"
                      id="original_l"
                      form="order-form"
                    >
                      {langsInflected.map((el, index) => (
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
                      className="orderForm__input_style select"
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
                      <i className="material-icons">file_upload</i> Выберите
                      файл(ы), до 50мб
                    </label>
                    <input
                      id="file"
                      type="file"
                      accept=".jpg, .jpeg, .png, .zip, .doc, .docx, .pdf, .djvu"
                      multiple
                      {...register("file", {
                        required: false,
                        onChange: handleFileChanged,
                      })}
                    />
                    <div className="textInfo">Для выбора нескольких файлов в окне зажмите ctrl или shift</div>
                    {errors?.file && (
                      <p className="orderForm__error">
                        {errors?.file?.message || "*файл не выбран"}
                      </p>
                    )}
                    {errorFileSize && (
                      <p className="orderForm__error">
                          *размер файла(ов) превышает 50мб
                      </p>
                    )}
                  </div>
                  <div className="orderForm__file-list">
                    {" "}
                    {filesArr?.map((el, idx) => (
                      <span key={idx}>
                        {el.name}{" "}
                        <i
                          className="material-icons clear"
                          onClick={() => handleDeleteFile(el.name)}
                        >
                          clear
                        </i>
                      </span>
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

              <div className="orderForm__privacyWrap">
                <div className="orderForm__privacy">
                  <input
                    {...register("privacy", { required: true })}
                    id="checkbox"
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
                  </span>
                </div>
                {errors?.privacy && (
                  <p className="orderForm__error">*необходимо подтверждение</p>
                )}
              </div>

              <div className="orderForm__button">
              {success && (
                  <p className="orderForm__sucsess">
                    <i className="material-icons">done</i>Заказ успешно
                    отправлен
                  </p>
                )}
                {errorSubmit && (
                  <p className="orderForm__sendError">
                    <i className="material-icons">close</i>Не удалось отправить
                    заказ. Свяжитесь с менеджером 
                  </p>
                )}
                <button type="submit">
                  {loading ? "Отправка..." : "Заказать перевод"}
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
}

export default OrderForm;
