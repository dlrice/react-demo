import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import CounterApp from "./counter";
import MessageApp from "./message";

const App = () => (
  <Fragment>
    <h1>Hello World</h1>
    <MessageApp />
    <h1>Message</h1>
    <MessageApp />
    <hr />
    <h1>Counter</h1>
    <CounterApp />
  </Fragment>
);

ReactDOM.render(<App />, document.getElementById("root"));
