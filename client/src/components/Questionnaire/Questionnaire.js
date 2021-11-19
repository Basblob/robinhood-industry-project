import "./Questionnaire.scss";
import React from "react";
import hexa1 from "../../Assets/hexa-1.svg";
import hexa2 from "../../Assets/hexa-2.svg";
import hexa3 from "../../Assets/hexa-3.svg";
import hexa4 from "../../Assets/hexa-4.svg";
import hexa5 from "../../Assets/hexa-5.svg";
import hexaCorrect from "../../Assets/hexa-correct.svg";
import hexaWrong from "../../Assets/hexa-wrong.svg";
import line from "../../Assets/Rectangle 63.svg";

export default class Question extends React.Component {
  state = {};

  handleCorrectAnswer = (e) => {
    let buttons = e.target.parentNode.children;
    let button = {};
    let otherButton = {};

    if (buttons[0] === e.target) {
      button = buttons[0];
      otherButton = buttons[1];
    } else {
      otherButton = buttons[0];
      button = buttons[1];
    }
    const rectangle = e.target.parentNode.parentNode.children[0];
    const query = rectangle.children[0];
    const response = rectangle.children[1];
    const hexa = rectangle.children[2];
    button.classList.add("active-button");
    rectangle.classList.add("turns-purple");
    hexa.src = hexaCorrect;
    query.className = "hide-me";
    response.classList.add("show-me");
  };
  handleWrongAnswer = (e) => {
    let buttons = e.target.parentNode.children;
    let button = {};
    let otherButton = {};

    if (buttons[0] === e.target) {
      button = buttons[0];
      otherButton = buttons[1];
    } else {
      button = buttons[1];
      otherButton = buttons[0];
    }
    const rectangle = e.target.parentNode.parentNode.children[0];
    const query = rectangle.children[0];
    const response = rectangle.children[1];
    const hexa = rectangle.children[2];
    button.classList.add("active-button");
    if (otherButton.classList.contains("active-button")) {
      otherButton.classList.remove("active-button");
    }
    rectangle.classList.add("turns-purple");
    hexa.src = hexaWrong;
    query.className = "hide-me";
    response.classList.add("show-me");
  };

  render() {
    return (
      <section className="question">
        <figure id="one" className="learn right">
          <div className="learn__blurb">
            <p className="learn__blurb__text ques ql">
              Is it legal for me to purchase cryptocurrency in the U.S.?
            </p>
            <p className="learn__blurb__text ans al">
              Yes. In 2013, the U.S. Treasury Department’s Financial Crimes
              Enforcement Network (FINCEN) stated that it is legal to invest in
              Bitcoin and use it as a form of payment as long as the seller is
              willing to accept it.
            </p>
            <img className="hexagon--left" src={hexa1} alt="hexagon" />
          </div>

          <div className="learn__answer">
            <button
              className="learn__answer--left"
              onClick={(e) => {
                this.handleCorrectAnswer(e);
              }}
            >
              Yes
            </button>
            <button
              className="learn__answer--right"
              onClick={(e) => {
                this.handleWrongAnswer(e);
              }}
            >
              No
            </button>
          </div>

          <img className="connector" src={line} alt="line" />
        </figure>
        {/* ------------------------------------- */}
        <figure id="two" className="learn left">
          <div className="learn__blurb">
            <p className="learn__blurb__text ques qr">
              Do I need to be super-rich to invest in cryptocurrencies?
            </p>
            <p className="learn__blurb__text ans ar">
              Not at all. We’ll let you in on a secret, the super-rich Bitcoin
              investors of today actually started out by buying small amounts of
              Bitcoin and accumulating during the bear market!
            </p>
            <img className="hexagon--right" src={hexa2} alt="hexagon" />
          </div>

          <div className="learn__answer">
            <button
              className="learn__answer--left"
              onClick={(e) => {
                this.handleWrongAnswer(e);
              }}
            >
              Yes
            </button>
            <button
              className="learn__answer--right"
              onClick={(e) => {
                this.handleCorrectAnswer(e);
              }}
            >
              No
            </button>
          </div>
          <img className="connector-b" src={line} alt="line" />
        </figure>

        {/* ------------------------------------- */}
        <figure id="three" className="learn right">
          <div className="learn__blurb">
            <p className="learn__blurb__text ques ql">
              Are blockchain and cryptocurrencies the same ?
            </p>
            <p className="learn__blurb__text ans al">
              No. Blockchain is the technology that allows for cryptocurrencies
              to work. It is important to separate the technology behind
              cryptocurrencies from the actual cryptocurrencies.
            </p>

            <img className="hexagon--left" src={hexa3} alt="hexagon" />
          </div>

          <div className="learn__answer">
            <button
              className="learn__answer--left"
              onClick={(e) => {
                this.handleWrongAnswer(e);
              }}
            >
              Yes
            </button>
            <button
              className="learn__answer--right"
              onClick={(e) => {
                this.handleCorrectAnswer(e);
              }}
            >
              No
            </button>
          </div>
          <img className="connector" src={line} alt="line" />
        </figure>
        {/* ------------------------------------- */}
        <figure id="four" className="learn left">
          <div className="learn__blurb">
            <p className="learn__blurb__text ques qr">
              Is cryptocurrency taxable?
            </p>
            <p className="learn__blurb__text ans ar">
              Yes. But if all you do with crypto this year is use U.S. dollars
              to purchase crypto and then keep it in an exchange or your
              personal crypto wallet, you won’t owe taxes on it.
            </p>
            <img className="hexagon--right" src={hexa4} alt="hexagon" />
          </div>

          <div className="learn__answer">
            <button
              className="learn__answer--left"
              onClick={(e) => {
                this.handleCorrectAnswer(e);
              }}
            >
              Yes
            </button>
            <button
              className="learn__answer--right"
              onClick={(e) => {
                this.handleWrongAnswer(e);
              }}
            >
              No
            </button>
          </div>
          <img className="connector-b" src={line} alt="line" />
        </figure>
        {/* ------------------------------------- */}
        <figure id="five" className="learn right">
          <div className="learn__blurb">
            <p className="learn__blurb__text ques ql">
              Can we trade cryptocurrencies 24/7 ?
            </p>
            <p className="learn__blurb__text ans al">
              Yes, on many exchanges you can place an order at 11 a.m. Sunday or
              any other day and time. Many cryptocurrencies trade 24 hours a
              day, seven days a week.
            </p>
            <img className="hexagon--left" src={hexa5} alt="hexagon" />
          </div>
          {/* ------------------------------------- */}
          {/* ------------------------------------- */}
          <div className="learn__answer">
            <button
              className="learn__answer--left"
              onClick={(e) => {
                this.handleCorrectAnswer(e);
              }}
            >
              Yes
            </button>
            <button
              className="learn__answer--right"
              onClick={(e) => {
                this.handleWrongAnswer(e);
              }}
            >
              No
            </button>
          </div>
        </figure>
        <button className="invest-today">Invest Today.</button>
        <p className="not-sure">
          Still not sure? Take a look at more info below.
        </p>
      </section>
    );
  }
}
