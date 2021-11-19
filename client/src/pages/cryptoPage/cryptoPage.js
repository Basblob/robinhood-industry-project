import { React, Component } from "react";
import "./cryptoPage.scss";
import Questionnaire from "../../components/Questionnaire/Questionnaire";

export default class cryptoPage extends Component {
  state = {};

  render() {
    return (
      <article className="crypto">
        <Questionnaire />
      </article>
    );
  }
}
