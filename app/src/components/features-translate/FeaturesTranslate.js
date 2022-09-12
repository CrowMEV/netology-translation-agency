import { v4 } from "uuid";
import { ICONS } from "./constants";

function FeaturesTranslate() {
  return (
    <div className="containerWrap">
      <section className="featuresTranslate">
        <h2>Переводим тексты любой сложности и тематики</h2>
        <div className="featuresTranslate__wrap">
          {ICONS.map((icon) => (
            <div key={v4()} className="featuresTranslate__item">
              <img src={icon.src} alt={icon.name} />
              <p className="featuresTranslate__text">{icon.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default FeaturesTranslate;
