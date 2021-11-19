import { React, Component, Link } from "react";
import "./cryptoPage.scss";
import Intro from "../../components/intro/intro";
import CardInfo from "../../components/cardInfo/cardInfo";
import Footer from "../../components/footer/footer";

export default class cryptoPage extends Component {
  state = {};

  render() {
    return (
      <article>
        <Intro />

        <CardInfo />
        <Footer />
      </article>
    );
  }
}
