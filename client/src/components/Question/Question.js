import React from "react";
import "./Question.scss";
import hexagon from "../../assets/hexa.svg";

export default function Question() {
  return (
    <section className="question">
      <figure className="learn right">
        <div className="learn__blurb">
          <img className="hexagon--left" src={hexagon} alt="hexagon" />
        </div>

        <div className="learn__answer">
          <button className="learn__answer--left">True</button>
          <button className="learn__answer--right">False</button>
        </div>
      </figure>
      {/* ------------------------------------- */}
      <figure className="learn left">
        <div className="learn__blurb">
          <img className="hexagon--right" src={hexagon} alt="hexagon" />
        </div>

        <div className="learn__answer">
          <button className="learn__answer--left">True</button>
          <button className="learn__answer--right">False</button>
        </div>
      </figure>
      {/* ------------------------------------- */}
      <figure className="learn right">
        <div className="learn__blurb">
          <img className="hexagon--left" src={hexagon} alt="hexagon" />
        </div>

        <div className="learn__answer">
          <button className="learn__answer--left">True</button>
          <button className="learn__answer--right">False</button>
        </div>
      </figure>
      {/* ------------------------------------- */}
      <figure className="learn left">
        <div className="learn__blurb">
          <img className="hexagon--right" src={hexagon} alt="hexagon" />
        </div>

        <div className="learn__answer">
          <button className="learn__answer--left">True</button>
          <button className="learn__answer--right">False</button>
        </div>
      </figure>
      {/* ------------------------------------- */}
      <figure className="learn right">
        <div className="learn__blurb">
          <img className="hexagon--left" src={hexagon} alt="hexagon" />
        </div>

        <div className="learn__answer">
          <button className="learn__answer--left">True</button>
          <button className="learn__answer--right">False</button>
        </div>
      </figure>
    </section>
  );
}
