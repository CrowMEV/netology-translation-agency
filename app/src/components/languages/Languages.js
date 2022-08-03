import {v4} from "uuid";
import {langs} from "./langs";

function Languages() {
  return (
    <section id="languages" className="languages">
      <h2>Языки для перевода</h2>
      <ul className="languages__wrap">
        {langs.map((lang) =>
          <li key={v4()} className="languages__item">{lang}</li>
        )}
      </ul>
      <p className="languages__banner">
        Мы постоянно ищем новых переводчиков и расширяем список языков. Не нашли в списке нужный Вам язык? Уточните у
        менеджеров компании — мы постараемся Вам помочь!
      </p>
    </section>
  )
}

export default Languages;
