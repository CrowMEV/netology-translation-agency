import {v4} from "uuid";

import {discounts} from "./discounts";

function Discount() {
  return (
    <section className="discount">
      <h2>Что влияет на стоимость?</h2>
      <div className="discount__wrap">
        {discounts.map(discount=>
          <div key={v4()} className="discount__item">
            <img src={require(`../../img/${discount.image}`)} alt={discount.content}/>
            <p className="discount__item_text">{discount.content}</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default Discount;
