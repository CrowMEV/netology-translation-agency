import Home from "../../img/socialIcons/address.svg";
import Phone from "../../img/socialIcons/tel.svg";
import WhatsUp from "../../img/socialIcons/whatsapp.svg";
import Telegram from "../../img/socialIcons/telegram.svg";
import Email from "../../img/socialIcons/mail.svg";
import { useEffect, useState } from "react";
import { getContacts as getContactsApi } from "../../api";

function Contacts() {
  const [contacts, setContacts] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  const getContacts = async () => {
    try {
      const res = await getContactsApi();
      setContacts(res);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoaded(true);
    }
  };

  useEffect(() => {
    if(!isLoaded){
      getContacts();
    }
  }, [isLoaded]);

  return (
    <div className="containerWrap">
      <section id="contacts" className="contacts">
        <h2>Контакты</h2>
        <div className="contacts__wrap">
          <div className="contacts__map">
            <div style={{ position: "relative", overflow: "hidden" }}>
              <a
                href="https://yandex.ru/maps/197/barnaul/?utm_medium=mapframe&utm_source=maps"
                style={{
                  color: "#eee",
                  fontSize: "12px",
                  position: "absolute",
                  top: "0px",
                }}
              >
                {contacts.city}
              </a>
              <a
                href="https://yandex.ru/maps/197/barnaul/house/depovskaya_ulitsa_7/bEoYcQBhTEQGQFtpfX91eXVhYA==/?ll=83.771511%2C53.348925&utm_medium=mapframe&utm_source=maps&z=17.28"
                style={{
                  color: "#eee",
                  fontSize: "12px",
                  position: "absolute",
                  top: "14px",
                }}
              >
                {contacts.address}
              </a>
              <iframe
                title={"карта"}
                src="https://yandex.ru/map-widget/v1/-/CCUNbNbz2C"
                width="100%"
                height="320"
                frameBorder="1"
                //allowFullScreen="true"
                style={{ position: "relative" }}
              />
            </div>
          </div>

          <address className="contacts__links">
            <div className="contacts__links_item">
              <img
                className="contacts__links_item_icon"
                src={Home}
                alt="адрес"
              />
              <a
                className="contacts__links_item_link"
                href="https://yandex.ru/maps/197/barnaul/house/depovskaya_ulitsa_7/bEoYcQBhTEQGQFtpfX91eXVhYA==/?ll=83.771511%2C53.348925&utm_medium=mapframe&utm_source=maps&z=17.28"
              >
                {contacts.city}
                <br />
                {contacts.address}
              </a>
            </div>
            <div className="contacts__links_item">
              <img
                className="contacts__links_item_icon"
                src={Phone}
                alt="мобильный телефон"
              />
              <a href="tel:+79132765509" className="contacts__links_item_link">
              {contacts.phone_1}
              </a>
            </div>

            <div className="contacts__links_item">
              <img
                className="contacts__links_item_icon"
                src={Phone}
                alt="городской телефон"
              />
              <a href="tel:+73852243947" className="contacts__links_item_link">
                {contacts.phone_2}
              </a>
            </div>

            <div className="contacts__links_item">
              <img
                className="contacts__links_item_icon"
                src={WhatsUp}
                alt="вотсап"
              />
              <a
                href="https://wa.me/79132765509"
                target="_blank"
                rel="noopener noreferrer"
                className="contacts__links_item_link"
              >
                {contacts.whatsapp}
              </a>
            </div>

            <div className="contacts__links_item">
              <img
                className="contacts__links_item_icon"
                src={Telegram}
                alt="телеграмм"
              />
              <a
                href="https://telegram.me/ilin_me"
                target="_blank"
                rel="noopener noreferrer"
                className="contacts__links_item_link"
              >
                {contacts.telegram}
              </a>
            </div>

            <div className="contacts__links_item">
              <img
                className="contacts__links_item_icon"
                src={Email}
                alt="электронная почта"
              />
              <a
                href="mailto:perevod_arap@mail.ru"
                className="contacts__links_item_link"
              >
                {contacts.email}
              </a>
            </div>
          </address>
        </div>
      </section>
    </div>
  );
}

export default Contacts;
