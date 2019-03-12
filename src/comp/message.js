import React, { Component } from "react";

export default class message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: [],
      messageList: []
    };
  }
  componentDidMount() {
    const url = "http://localhost:2222/api/get";
    fetch(url, {
      method: "GET",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    })
      .then(data => {
        return data.json();
      })
      .then(data => {
        console.log("data:-", data);
        const msg = data.map(key => {
          return (
            <div key={key.message}>
              <p> name:- {key.name}</p>
              <p> message:-{key.message}</p>
              <br />
            </div>
          );
        });
        this.setState({
          message: msg
        });
      });
  }

  render() {
    return <div className="ui container">{this.state.message}</div>;
  }
}
