import { React, Component } from "react";
import "./cryptoPage.scss";
import Question from "../../components/Question/Question";

export default class cryptoPage extends Component {
  state = {};

  render() {
    return (
      <article className="crypto">
        <Question />
      </article>
    );
  }
}
