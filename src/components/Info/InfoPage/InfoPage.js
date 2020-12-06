import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { AllData } from "../AllData/AllData";
import Answer from "../Answers/Answer";
import BasicAnswer from "../Answers/BasicAnswer";
import Question from "../Questions/Question";
import "./InfoPage.css";

class InfoPage extends Component {
  state = {
    displayBasicAnswer: true,
  };

  hideBasicAnswer = () => {
    this.setState({
      displayBasicAnswer: false,
    });
  };

  render() {
    return (
      <div className="infoPage">
        <aside className="questionsList">
          <h1 className='findOutMore'>FIND OUT MORE:</h1>
          {AllData.map((object,index) => (
            <Question
            key={index}
              action={this.hideBasicAnswer}
              question={object.question}
              where={object.path}
            />
          ))}
        </aside>
        <main className="answers">
          {this.state.displayBasicAnswer && <BasicAnswer />}
          <Switch>
            {AllData.map((object, index) => (
              <Route path={object.path} key={index}>
                <Answer answer={object.answer} key={index} />
              </Route>
            ))}
          </Switch>
        </main>
      </div>
    );
  }
}

export default InfoPage;
