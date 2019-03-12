import React from "react";
import ReactDOM from "react-dom";
import Form from "./comp/form";
import Message from "./comp/message";

import "./css/form.css";

const ele = (
  <div className="comp">
    <div className="message">
      <Message />
    </div>
    <div className="form">
      <Form />
    </div>
  </div>
);

ReactDOM.render(ele, document.getElementById("root"));
