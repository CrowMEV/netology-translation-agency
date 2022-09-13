import React from "react";
import prettyFemale from "../../img/prettyFemale.svg";
import dottedBackground from "../../img/dottedBackground.svg";

function MainBanner() {
  return (
    <section class="mainBanner">
      <div class="containerWrap">
        <div class="mainBanner__wrap">
          <div class="mainBanner__text">
            <h1>
              <div>Алтайская</div>
              <div>региональная</div>
              <div>ассоциация</div>
              <div>переводчиков</div>
            </h1>
            <p>Язык — ключ к общению. Мы поможем понять друг друга.</p>
            {/* <button className='btn '><a href="#form">Заказать перевод</a></button> */}
          </div>
          <div class="mainBanner__img">
            <img
              class="prettyFemale"
              src={prettyFemale}
              alt="красивая женщина"
            />
            <img
              class="dottedBackground"
              src={dottedBackground}
              alt="фон с точками"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainBanner;
