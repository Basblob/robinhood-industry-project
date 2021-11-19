import React from "react";
import "./footer.scss";
import Footer from "../../Assets/Footer.svg";
import Bubble from "../../Assets/Coin.svg";

export default function folder() {
  return (
    <article>
      <section className="protection">
        <div className="pink-list">
          <h3 className="pink-list__title">Protection for your coins, peace of mind for you</h3>
          <ul>
            <li className="pink-list__title--list">Industry-leading security</li>
            <li className="pink-list__title--list">Ownership over your coins</li>
            <li className="pink-list__title--list">Cold storage for vast majority of our customers’ coins</li>
            <li className="pink-list__title--list">Crime insurance against theft and cybersecurity breaches</li>
          </ul>
        </div>
        <div className="extension">
          <img className="extension__img" src={Bubble} alt="Bit coins in a green bubble" />
        </div>
      </section>
      <img className="footer" src={Footer} alt="Fake footer" />
    </article>
  );
}
