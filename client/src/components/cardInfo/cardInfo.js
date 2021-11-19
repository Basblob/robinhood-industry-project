import React from "react";
import "./cardinfo.scss";
import Printer from "../../Assets/Group 6.svg";
import Balance from "../../Assets/Money.svg";
import Shake from "../../Assets/HandShake.svg";

export default function CardInfo() {
  return (
    <article className="background">
      <section className="card-sec">
        <a href="https://snacks.robinhood.com/" className="linky">
          <div className="card">
            <h3 className="card__title">Read More</h3>
            <p className="card__text">Blog & News</p>
            <img
              className="card__image"
              src={Printer}
              alt="A 3d plan/graphing"
            />
          </div>
        </a>

        <a
          href="https://www.youtube.com/channel/UCY55VHsy1umgvR35gl5bmUw"
          className="linky"
        >
          <div className="card">
            <h3 className="card__title">Watch more</h3>
            <p className="card__text">Videos and Education</p>
            <img
              className="card__image"
              src={Balance}
              alt="Money weight balance"
            />
          </div>
        </a>

        <a
          href="https://robinhood.com/us/en/support/articles/how-to-contact-phone-support/"
          className="linky"
        >
          <div className="card">
            <h3 className="card__title">Chat with an Advisor</h3>
            <img
              className="card__image"
              src={Shake}
              alt="People shaking hands"
            />
          </div>
        </a>
      </section>
    </article>
  );
}
