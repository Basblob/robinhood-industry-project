import React from "react";
import "./Question.scss";

export default function Question() {
  return (
    <section className="learn">
      <div className="learn__question">
        <figure className="learn__question__blurb"></figure>
        <img src="" alt="" />
      </div>
      <div className="learn__answer">
        <button className="learn__answer--left">True</button>
        <button className="learn__answer--right">False</button>
      </div>
    </section>
  );
}
