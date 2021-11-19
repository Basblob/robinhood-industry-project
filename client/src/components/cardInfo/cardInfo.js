import React from "react";
import "./cardinfo.scss";
import Printer from "../../Assets/Group 6.svg";
import Balance from "../../Assets/Money.svg";
import Shake from "../../Assets/HandShake.svg";

export default function CardInfo() {
  return (
    <article className="background">
      <section className="card-sec">
        <div className="card">
          <h3 className="card__title">Read More</h3>
          <p className="card__text">Blog & News</p>
          <img className="card__image" src={Printer} alt="A 3d plan/graphing" />
        </div>

        <div className="card">
          <h3 className="card__title">Watch more</h3>
          <p className="card__text">Videos and Education</p>
          <img className="card__image" src={Balance} alt="Money weight balance" />
        </div>

        <div className="card">
          <h3 className="card__title">Chat with an Advisor</h3>
          <img className="card__image" src={Shake} alt="People shaking hands" />
        </div>
      </section>
    </article>
  );
}
