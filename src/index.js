import React from "react";
import ReactDOM from "react-dom";
import Lottie from "react-lottie";
import animationData from "./data.json";

import "./styles.css";

class App extends React.Component {
  defaultOptions = {
    autoplay: true,
    loop: true,
    animationData: animationData
  };

  eventListeners = [
    {
      eventName: "loopComplete",
      callback: () => console.log("a loop complete")
    }
  ];

  render() {
    return (
      <Lottie
        width={300}
        eventListeners={this.eventListeners}
        options={this.defaultOptions}
      />
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
