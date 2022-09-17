function HowWeWork() {
  return (
    <section className="howWeWork">
      <h2>Как мы работаем</h2>
      <div className="howWeWork__wrap">

        <div className="howWeWork__item">
          <div className="howWeWork__item_container-outer">
            <div className="howWeWork__item_container-inner">
              <div className="howWeWork__item_number">
                1
              </div>
              <div className="howWeWork__item_content">
                <p>Оформите заявку</p>
                <ul className="howWeWork__item_content_list">
                  <li className="howWeWork__item_content_list-item">Сайт</li>
                  <li className="howWeWork__item_content_list-item">Email</li>
                  <li className="howWeWork__item_content_list-item">Телефон</li>
                  <li className="howWeWork__item_content_list-item">Офис</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="howWeWork__item">
          <div className="howWeWork__item_container-outer">
            <div className="howWeWork__item_container-inner">
              <div className="howWeWork__item_number">
                2
              </div>
              <div className="howWeWork__item_content">
                <p>Уточняем детали, выполняем перевод</p>
              </div>
            </div>
          </div>
        </div>

        <div className="howWeWork__item">
          <div className="howWeWork__item_container-outer">
            <div className="howWeWork__item_container-inner">
              <div className="howWeWork__item_number">
                3
              </div>
              <div className="howWeWork__item_content">
                <p>Получите готовый заказ</p>
                <ul className="howWeWork__item_content_list_flat">
                  <li className="howWeWork__item_content_list-item">Доставка</li>
                  <li className="howWeWork__item_content_list-item">Email</li>
                  <li className="howWeWork__item_content_list-item">Офис</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
      <button type="button"><a href="#form">Заказать перевод</a></button>
    </section>
  )
}

export default HowWeWork;
