import "./Questionnaire.scss";
import React from "react";
import hexa1 from "../../assets/hexa-1.svg";
import hexa2 from "../../assets/hexa-2.svg";
import hexa3 from "../../assets/hexa-3.svg";
import hexa4 from "../../assets/hexa-4.svg";
import hexa5 from "../../assets/hexa-5.svg";
import coin1 from "../../assets/GreenCoin_1.svg";
import coin2 from "../../assets/GreenCoin_2.svg";
import coin3 from "../../assets/GreenCoin_3.svg";

export default class Question extends React.Component {
  render() {
    return (
      <section className="question">
        <figure className="learn right">
          <div className="learn__blurb">
            <p className="learn__blurb__text">Is Cryptocurrency Legal?</p>
            <img className="hexagon--left" src={hexa1} alt="hexagon" />
          </div>

          <div className="learn__answer">
            <button className="learn__answer--left">True</button>
            <button className="learn__answer--right">False</button>
          </div>
        </figure>
        {/* ------------------------------------- */}
        <figure className="learn left">
          <div className="learn__blurb">
            <p className="learn__blurb__text">
              Are Bitcoin and other "Crypto-Coins" real money?
            </p>
            <img className="hexagon--right" src={hexa2} alt="hexagon" />
          </div>

          <div className="learn__answer">
            <button className="learn__answer--left">True</button>
            <button className="learn__answer--right">False</button>
          </div>
        </figure>
        {/* ------------------------------------- */}
        <figure className="learn right">
          <div className="learn__blurb">
            <p className="learn__blurb__text">
              Is the blockchain the same thing as Cryptocurrency?
            </p>
            <img className="hexagon--left" src={hexa3} alt="hexagon" />
          </div>

          <div className="learn__answer">
            <button className="learn__answer--left">True</button>
            <button className="learn__answer--right">False</button>
          </div>
        </figure>
        {/* ------------------------------------- */}
        <figure className="learn left">
          <div className="learn__blurb">
            <p className="learn__blurb__text">Is Cryptocurrency taxable?</p>
            <img className="hexagon--right" src={hexa4} alt="hexagon" />
          </div>

          <div className="learn__answer">
            <button className="learn__answer--left">True</button>
            <button className="learn__answer--right">False</button>
          </div>
        </figure>
        {/* ------------------------------------- */}
        <figure className="learn right">
          <div className="learn__blurb">
            <p className="learn__blurb__text">
              Is the blockchain the same thing as Cryptocurrency?
            </p>
            <img className="hexagon--left" src={hexa5} alt="hexagon" />
          </div>

          <div className="learn__answer">
            <button className="learn__answer--left">True</button>
            <button className="learn__answer--right">False</button>
          </div>
        </figure>
        <button className="invest-today">Invest Today.</button>
        <p className="not-sure">
          Still not sure? Take a look at more info below.
        </p>
        <img className="coin1" src={coin1} alt="crypto coin" />
        <img className="coin2" src={coin2} alt="ethereum coin" />
        <img className="coin3" src={coin3} alt="bitcoin" />
      </section>
    );
  }
}
