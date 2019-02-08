import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import CounterApp from "./counter";
import MessageApp from "./message";
import HelloWorldApp from "./hello-world";

const Title = ({ children }) => (
  <Fragment>
    <hr />
    <h1 style={{ color: "darkblue" }}>
      --
      {children}
      --
    </h1>
  </Fragment>
);

const App = () => (
  <Fragment>
    <Title>Hello World Demo</Title>
    <HelloWorldApp />
    <Title>Message Demo</Title>
    <MessageApp />
    <Title>Counter Demo</Title>
    <CounterApp />
  </Fragment>
);

ReactDOM.render(<App />, document.getElementById("root"));
