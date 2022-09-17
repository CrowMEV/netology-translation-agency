import React from "react";
import bannerMerge from "../../img/bannerMerge.png";
import femaleMob from "../../img/femaleMob.svg";

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
            <p>
              Язык — ключ к общению.{" "}
              <span class="textNoBreak">Мы поможем понять друг друга.</span>{" "}
              <span class="textBreak">
                <br />
                Мы поможем понять друг друга.
              </span>
            </p>
          </div>
          <div class="mainBanner__img">
            <img
              class="prettyFemale"
              src={bannerMerge}
              alt="красивая женщина"
            />

            <img
              class="prettyFemaleMob"
              src={femaleMob}
              alt="красивая женщина"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainBanner;
