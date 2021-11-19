import React from "react";
import "./intro.scss";
import Coin from "../../Assets/Bitcoin Icon.svg";
import Money from "../../Assets/Dollar Icon.svg";
import Lightning from "../../Assets/Lightning Icon.svg";

export default function InfoCard() {
  return (
    <article>
      <section className="whyRH">
        <h3 className="whyRH__header">Why Robinhood is Your Trusted Brand in Cryptocurrency</h3>
        <div className="whyRH__row">
          <div className="whyRH__column">
            <h4 className="whyRH__title">You buy...you get</h4>
            <img src={Coin} alt="Hand holding a coin" />
            <p className="whyRH__column--text">If you buy $100 of crypto, you should get $100 of crypto.</p>
          </div>

          <div className="whyRH__column">
            <h4 className="whyRH__title">Start small</h4>
            <img src={Money} alt="Dollar Sign" />
            <p className="whyRH__column--text">There's no need to buy a whole new coin - start with as litle as $1.</p>
          </div>

          <div className="whyRH__column">
            <h4 className="whyRH__title">Sign up fast</h4>
            <img src={Lightning} alt="Lightning Bolt" />
            <p className="whyRH__column--text">Like faster than ordering takeout fast.</p>
          </div>
        </div>
      </section>

      <section className="grey">
        <h2 className="title">Learn the basics with CRYPTO 101</h2>
        <p className="title__subtext">Lets see what you know!</p>
      </section>
    </article>
  );
}
