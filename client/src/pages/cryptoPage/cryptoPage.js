import { React, Component } from "react";
import "./cryptoPage.scss";
import Questionnaire from "../../components/Questionnaire/Questionnaire";
import Intro from "../../components/intro/intro";
import CardInfo from "../../components/cardInfo/cardInfo";
import Footer from "../../components/footer/footer";

export default class cryptoPage extends Component {
  state = {};

  render() {
    return (
      <article className="crypto">
        <Questionnaire />
        <Intro />
        <CardInfo />
        <Footer />
      </article>
    );
  }
}
