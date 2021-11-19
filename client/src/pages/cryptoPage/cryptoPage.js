import { React, Component } from "react";
import "./cryptoPage.scss";
import Hero from "../../components/Hero/Hero";
import Header from "../../components/Header/Header";
import Questionnaire from "../../components/Questionnaire/Questionnaire";
import Intro from "../../components/intro/intro";
import CardInfo from "../../components/cardInfo/cardInfo";
import Footer from "../../components/footer/footer";
import coin1 from "../../Assets/GreenCoin_1.svg";
import coin2 from "../../Assets/GreenCoin_2.svg";
import coin3 from "../../Assets/GreenCoin_3.svg";

export default class cryptoPage extends Component {
  state = {};

  render() {
    return (
      <article className="crypto">
        <Header />
        <Hero />
        <Intro />
        <Questionnaire />
        <CardInfo />
        <Footer />
        <img className="coin1" src={coin1} alt="crypto coin" />
        <img className="coin2" src={coin2} alt="ethereum coin" />
        <img className="coin3" src={coin3} alt="bitcoin" />
      </article>
    );
  }
}
