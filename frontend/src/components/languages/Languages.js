import {v4} from "uuid";
import { LANGS } from "./langs";

function Languages() {
  return (
    <div className="containerWrap">
      <section id="languages" className="languages">
        <h2>Языки для перевода</h2>
        <ul className="languages__wrap">
          {LANGS.map((lang) => (
            <li key={v4()} className="languages__item">
              <div className="languages__content">
                <img class="languages__img" src={lang.flag} alt="премия" />
                <span>{lang.name}</span>
              </div>
            </li>
          ))}
        </ul>
        <p className="languages__banner">
          Не нашли в списке нужный язык? Уточните у менеджеров — постараемся
          помочь!
        </p>
      </section>
    </div>
  );
}

export default Languages;
