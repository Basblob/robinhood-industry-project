import React from "react";
import "./cardinfo.scss";
import Printer from "../../Assets/Group 6.svg";
import Balance from "../../Assets/Money.svg";
import Shake from "../../Assets/HandShake.svg";

export default function CardInfo() {
  return (
    <article>
      <section className="card-sec">
        <div className="card">
          <h3 className="card__title">Read More</h3>
          <img src={Printer} />
        </div>

        <div className="card">
          <h3 className="card__title">Watch more</h3>
          <img src={Balance} />
        </div>

        <div className="card">
          <h3 className="card__title">Chat with an Advisor</h3>
          <img className="card__img" src={Shake} />
        </div>
      </section>
    </article>
  );
}
