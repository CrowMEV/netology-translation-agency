import React from "react";
import bannerMerge from "../../img/bannerMerge.png";
import femaleMob from "../../img/femaleMob.svg";

function MainBanner() {
  return (
    <section className="mainBanner">
      <div className="containerWrap">
        <div className="mainBanner__wrap">
          <div className="mainBanner__text">
            <h1>
              <div>Алтайская</div>
              <div>региональная</div>
              <div>ассоциация</div>
              <div>переводчиков</div>
            </h1>
            <p>
              Язык — ключ к общению.{" "}
              <span className="textNoBreak">Мы поможем понять друг друга.</span>{" "}
              <span className="textBreak">
                <br />
                Мы поможем понять друг друга.
              </span>
            </p>
          </div>
          <div className="mainBanner__img">
            <img
              className="prettyFemale"
              src={bannerMerge}
              alt="красивая женщина"
            />

            <img
              className="prettyFemaleMob"
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
