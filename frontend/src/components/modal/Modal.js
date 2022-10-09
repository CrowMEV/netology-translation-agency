import React from "react";
import "./Modal.scss";

function Modal({ setActive }) {
  return (
    <div className="modal" onClick={() => setActive(false)}>
      <div className="modalContent" onClick={(e) => e.isPropagationStopped()}>
        <div className="headerModal">
          <div className="closeModal">
            <span className="material-icons" onClick={() => setActive(false)}>
              close
            </span>
          </div>
          <p>Политика конфиденциальности</p>
        </div>
        <div className="modalContentText">
          <p className="descriptionWrap">
            в отношении личных данных клиентов, пользующихся сервисами
            официального сайта <br />
            Общества с ограниченной ответственностью “Алтайская региональная
            ассоциация <br />
            переводчиков” (далее по тексту - компания).
          </p>
          <br />
          <div className="modalText">
            <p>Уважаемые клиенты!</p>
            <br />
            <p>
              Использование сервисов на сайте нашей компании предполагает
              размещение, хранение и обработку ваших личных контактных данных
              и/или документов, которые могут содержать информацию, не
              подлежащую разглашению. Наша компания принимает на себя полную
              ответственность за неразглашение и сохранение конфиденциальности
              данной информации. Будьте уверены, что ваши контактные данные и
              содержание предоставленных на перевод документов ни при каких
              обстоятельствах не попадут к третьим лицам и не будут
              использоваться в ущерб вашим интересам.
            </p>
            <br />
            <p>
              Наши переводчики работают с деловой и личной документацией,
              перепиской, авторскими научными статьями, производственной и
              финансовой документацией, инструкциями для внутреннего
              пользования.
            </p>
            <br />
            <p>
              Задачи бывают разными, но все они одинаково важны для нас и мы
              всегда соблюдаем принципы нашей компании: порядочность,
              надежность, профессиональная этика.
            </p>
            <br />
            <p>
              Если ваши документы содержат: <br />
              коммерческую тайну, ноу-хау, результаты уникальных научных
              экспериментов, <br />
              описание технологий и бизнес-процессов; <br />
              персональные данные, сведения о вас или вашей семье;
              <br />
              любую другую информацию, не предназначенную для третьих лиц.
              <br />
              — подписываем договор о неразглашении информации. <br />
              Мы ценим ваше доверие и дорожим своей репутацией!
            </p>
            <br />
            <h3>Сервис по заказу перевода</h3>
            <p>
              Заказ на перевод вы можете сделать через сервис «Заказать перевод»
              на нашем официальном сайте. При этом Ваша контактная информация,
              номер телефона, электронный адрес и текст документа, перевод
              которого необходимо выполнить, не будут отображаться в Интернете,
              и открытого доступа у третьих лиц к ним не будет. Вся информация
              хранится и обрабатывается исключительно в рамках компании.{" "}
            </p>
            <br />
            <h3>Сервис по заказу обратного звонка</h3>
            <p>
              При пользовании данным сервисом, номер вашего контактного телефона
              получают менеджеры компании, которые осуществляют обратный звонок.
              Наши менеджеры не передают ваши контактные данные третьим лицам.
            </p>
            <br />
            <h3>Изменения политики конфиденциальности</h3>
            <p>
              Условия политики конфиденциальности могут быть изменены по решению
              руководства компании в одностороннем порядке, без уведомления
              заинтересованных лиц. Все внесенные изменения будут отражены в
              настоящем документе.
            </p>
          </div>
        </div>
        <footer className="modalFooter">
          <button className="button" onClick={() => setActive(false)}>
            Понятно
          </button>
        </footer>
      </div>
    </div>
  );
}

export default Modal;
