import React from 'react'

function Form() {
  return (
   <>
    <section id="form" class="form">
        <div class="container">
        <h2>Заказать перевод</h2>

        <form id="order-form" name="orderForm" action="POST" class="form__translate">
         
          <div class="form__radio">
            <input type="radio" name="face" id="fz" value="Юридическое лицо"/>
            <label for="fz" >Юридическое лицо</label>

              <input type="radio" name="face" id="ur" value="Физическое лицо"/>
            <label for="ur">Физическое лицо</label>
            </div>


      

          <div class="form__input">
            <label for="city">Город</label>
            <input type="text" name="city" class="form__input_style" placeholder="Барнаул"/>
          </div>
          <div class="form__input">
            <label for="initials">Фамилия, имя</label>
            <input type="text" name="initials" class="form__input_style" placeholder="Иванов Иван"/>
          </div>
          <div class="form__input">
            <label for="telephone">Телефон</label>
            <input type="tel" name="telephone" class="form__input_style" placeholder="+79999999999"/>
          </div>
          <div class="form__input">
            <label for="email">Email</label>
            <input type="email" name="email" class="form__input_style" placeholder="example@mail.ru"/>
          </div>


          <div class="form__select_changeLanguage">
            <label for="">Язык перевода</label>

            <div class="form__select_changeLanguage_wrap">

              <div id="originalLangDD" class="lang-dropdown">
                <div class="lang-dropdown__controls">
                    с ... языка
                </div>
                <select name="originalLang" class="lang-dropdown__select lang-dropdown__hidden" size="5">
                  <option value="азербайджанский">азербайджанский</option>
                  <option value="английский">английский</option>
                  <option value="арабский">арабский</option>
                  <option value="армянский">армянский</option>
                  <option value="белорусский">белорусский</option>
                  <option value="иврит">иврит</option>
                  <option value="испанский">испанский</option>
                  <option value="итальянский">итальянский</option>
                  <option value="китайский">китайский</option>
                  <option value="корейский">корейский</option>
                  <option value="молдавский">молдавский</option>
                  <option value="немецкий">немецкий</option>
                  <option value="польский">польский</option>
                  <option value="румынский">румынский</option>
                  <option value="сербский">сербский</option>
                  <option value="таджикский">таджикский</option>
                  <option value="турецкий">турецкий</option>
                  <option value="узбекский">узбекский</option>
                  <option value="украинский">украинский</option>
                  <option value="французский">французский</option>
                  <option value="чешский">чешский</option>
                  <option value="японский">японский</option>
                  <option value="другой">другой</option>
                </select>
              </div>

              <div id="targetLangDD" class="lang-dropdown">
                <div class="lang-dropdown__controls">
                    на ... язык
                </div>
                <select name="targetLang" class="lang-dropdown__select lang-dropdown__hidden" size="3">
                  <option value="азербайджанский">азербайджанский</option>
                  <option value="английский">английский</option>
                  <option value="арабский">арабский</option>
                  <option value="армянский">армянский</option>
                  <option value="белорусский">белорусский</option>
                  <option value="иврит">иврит</option>
                  <option value="испанский">испанский</option>
                  <option value="итальянский">итальянский</option>
                  <option value="китайский">китайский</option>
                  <option value="корейский">корейский</option>
                  <option value="молдавский">молдавский</option>
                  <option value="немецкий">немецкий</option>
                  <option value="польский">польский</option>
                  <option value="румынский">румынский</option>
                  <option value="сербский">сербский</option>
                  <option value="таджикский">таджикский</option>
                  <option value="турецкий">турецкий</option>
                  <option value="узбекский">узбекский</option>
                  <option value="украинский">украинский</option>
                  <option value="французский">французский</option>
                  <option value="чешский">чешский</option>
                  <option value="японский">японский</option>
                  <option value="другой">другой</option>
                </select>
              </div>

            </div>
          </div>

        

          <div class="form__checkbox">
            <label for="image">Материалы</label>

            <div class="form__checkbox_wrap">
              <input type="radio" id="electr" name="image"/>
              <label for="electr">в электронном виде</label>

              <input type="radio" id="paper" name="image"/>
              <label for="paper">на бумажном носителе</label>


            </div>

          </div>

        

          <div class="form__file">
            <label for="file">Прикрепить файл</label>
            <input type="file" name="file" multiple/>
          </div>
       

          <div class="form__date">
            <label for="date">Дата готовности перевода</label>
            <input type="date" name="date" class="form__input_style" placeholder="xx.xx.xxxx"/>
          </div>

      
          <div class="form__textarea">
            <label for="comment">Дополнительная информация</label>
            <textarea rows="7" class="form__textarea_style" name="comment"></textarea>
          </div>

          <div class="form__privacy">
            <input type="checkbox" name="privacy"  />
            <span>Я подтверждаю, что ознакомлен(а) с <a href="/">Политикой конфиденциальности</a></span>
          </div>

          <button type="submit">Заказать перевод</button>

        </form>
      </div>
      </section>
   </>
  )
}

export default Form