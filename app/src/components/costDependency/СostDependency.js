import { v4 } from "uuid";
import { ICONS } from "./constants";

function СostDependency() {
  return (
    <div className="containerWrap">
      <section className="costDependency">
        <h2>Что влияет на стоимость?</h2>
        <div className="costDependency__wrap">
          {ICONS.map((icon) => (
            <div key={v4()} className="costDependency__item">
              <img
                src={require(`../../img/${icon.image}`)}
                alt={icon.content}
              />
              <p className="costDependency__item__text">{icon.content}</p>
            </div>
          ))}
        </div>
        <p>
          Наша команда — настоящие профессионалы своего дела, зарекомендовавшие
          себя годами безупречной работы. Качество переводов на всех этапах
          работы под нашим пристальным контролем — убедитесь в этом сами!
        </p>
      </section>
    </div>
  );
}

export default СostDependency;
