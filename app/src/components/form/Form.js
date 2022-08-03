import React, {useRef, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {IMaskInput} from "react-imask";
import {langs} from "./langs";
import {v4} from "uuid";

const HOST_URL = 'http://localhost:8888';

function Form() {
  const [originalLSelectVisible, setOLSelectVisible] = useState(false);
  const [targetLSelectVisible, setTLSelectVisible] = useState(false);

  const { form } = useSelector((state) => state);
  const {
      face,
      city,
      initials,
      telephone,
      email,
      originalLang,
      targetLang,
      image,
      date,
      comment,
      privacy,
  } = form;

  const dispatch = useDispatch();
  const fileInputRef = useRef();

  const updateValue = (name, value) => {
    dispatch({type: 'form/updateValue', payload: {name, value}});
  }

  const setAgreement = (e) => {
    const { name, checked } = e.target;
    dispatch({type: 'form/updateValue', payload: { name, value: checked }});
  };

  const switchFactory = (value, method) => {
    return () => {
      if (value) {
        method(false)
      } else {
        method(true);
      }
    }
  }
  const toggleOL = switchFactory(originalLSelectVisible, setOLSelectVisible);
  const toggleTL = switchFactory(targetLSelectVisible, setTLSelectVisible);


  const formSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      Object.keys(form).forEach((key) => {
        formData.set(key, form[key]);
      });

      const files = fileInputRef.current?.files;
      Object.keys(files).forEach((key) => {
        formData.append(`files[]`, files[key], files[key].name);
      });

      const request = await fetch(HOST_URL, {
        method: 'POST',
        body: formData,
      });
      if (request.ok) {
        const data = await request.text();
        console.log('From server: ');
        console.log(data);
        console.log(request.status, request.statusText);
        // showSuccessMessage();
      }
    } catch (e) {
      console.log(e.message);
    }
  }

  return (
   <>
    <section id="form" className="form">
        <h2>Заказать перевод</h2>

        <form id="order-form" name="orderForm" onSubmit={formSubmit} className="form__translate">

          <div className="form__radio">
            <input
              type="radio"
              name="face"
              id="fz"
              value="Юридическое лицо"
              checked={face === 'Юридическое лицо'}
              onChange={(e) => updateValue('face', e.target.value)}
            />
            <label htmlFor="fz" >Юридическое лицо</label>
            <input
              type="radio"
              name="face"
              id="ur"
              value="Физическое лицо"
              checked={face === "Физическое лицо"}
              onChange={(e) => updateValue('face', e.target.value)}
            />
            <label htmlFor="ur">Физическое лицо</label>
          </div>

          <div className="form__input">
            <label htmlFor="city">Город</label>
            <input
              required={true}
              type="text"
              name="city"
              className="form__input_style"
              placeholder="Барнаул"
              value={city}
              onChange={(e) => updateValue('city', e.target.value)}
            />
          </div>

          <div className="form__input">
            <label htmlFor="initials">Фамилия, имя</label>
            <input
              required={true}
              type="text"
              name="initials"
              className="form__input_style"
              placeholder="Иванов Иван"
              value={initials}
              onChange={(e) => updateValue('initials', e.target.value)}
            />
          </div>

          <div className="form__input">
            <label htmlFor="telephone">Телефон</label>
            <IMaskInput
              mask="+{7} (000) 000-00-00"
              className="form__input_style"
              name="telephone"
              id="tel"
              unmask
              value={telephone}
              lazy={false}
              onAccept={(value) => updateValue('telephone', value)}
            />
          </div>

          <div className="form__input">
            <label htmlFor="email">Email</label>
            <input
              required={true}
              type="email"
              name="email"
              className="form__input_style"
              placeholder="example@mail.ru"
              value={email}
              onChange={(e) => updateValue('email', e.target.value)}
            />
          </div>


          <div className="form__select_changeLanguage">
            <label htmlFor="">Язык перевода</label>

            <div className="form__select_changeLanguage_wrap">

              <div id="originalLangDD" className="lang-dropdown">
                <div
                  className="lang-dropdown__controls"
                  onClick={toggleOL}
                >
                  {originalLang}
                </div>
                <select
                  name="originalLang"
                  className={
                    originalLSelectVisible ? 'lang-dropdown__select'
                      : 'lang-dropdown__select lang-dropdown__hidden'
                  }
                  size="5">
                  {langs.map(lang =>
                    <option
                      key={v4()}
                      value={lang}
                      onClick={(e) => {
                        updateValue('originalLang', lang);
                        toggleOL();
                      }
                      }
                    >{lang}</option>
                  )}
                </select>
              </div>

              <div id="targetLangDD" className="lang-dropdown">
                <div
                  className="lang-dropdown__controls"
                  onClick={toggleTL}
                >
                  {targetLang}
                </div>
                <select
                  name="targetLang"
                  className={
                    targetLSelectVisible ? 'lang-dropdown__select'
                      : 'lang-dropdown__select lang-dropdown__hidden'
                  }
                  size="3">
                  {langs.map(lang =>
                    <option
                      key={v4()}
                      value={lang}
                      onClick={(e) => {
                        updateValue('targetLang', lang);
                        toggleTL();
                      }}
                    >{lang}</option>
                  )}
                </select>
              </div>

            </div>
          </div>

          <div className="form__checkbox">
            <label htmlFor="image">Материалы</label>
            <div className="form__checkbox_wrap">
              <input
                type="radio"
                name="image"
                id="electronic"
                value="В электронном виде"
                checked={image === "В электронном виде"}
                onChange={(e) => updateValue('image', e.target.value)}
              />
              <label htmlFor="electronic">в электронном виде</label>
              <input
                type="radio"
                name="image"
                id="paper"
                value="На бумажном носителе"
                checked={image === "На бумажном носителе"}
                onChange={(e) => updateValue('image', e.target.value)}
              />
              <label htmlFor="paper">на бумажном носителе</label>
            </div>
          </div>


          <div className="form__file">
            <label htmlFor="documents">Прикрепить файл</label>
            <input
              type="file"
              name="documents"
              multiple
              ref={fileInputRef}
            />
          </div>

          <div className="form__date">
            <label htmlFor="date">Дата готовности перевода</label>
            <input
              type="date"
              name="date"
              className="form__input_style"
              value={date}
              onChange={(e) => updateValue('date', e.target.value)}
            />
          </div>


          <div className="form__textarea">
            <label htmlFor="comment">Дополнительная информация</label>
            <textarea
              rows="7"
              className="form__textarea_style"
              name="comment"
              value={comment}
              onChange={(e) => updateValue('comment', e.target.value)}
            />
          </div>

          <div className="form__privacy">
            <input
              required={true}
              type="checkbox"
              name="privacy"
              checked={privacy}
              onChange={setAgreement}
            />
            <span>Я подтверждаю, что ознакомлен(а) с <a href="/">Политикой конфиденциальности</a></span>
          </div>

          <button type="submit">Заказать перевод</button>

        </form>
      </section>
   </>
  )
}

export default Form
