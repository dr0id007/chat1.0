import React, { Component } from "react";
import Button from "semantic-ui-react/dist/commonjs/elements/Button";
import Text from "semantic-ui-react/dist/commonjs/elements/Input";
import Styled from "styled-components";

export default class form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: [],
      message: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("submit called...");
    console.log("name", this.state.name);
    console.log("message", this.state.message);

    const url = "http://localhost:2222/api/post";
    fetch(url, {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify({
        name: this.state.name,
        message: this.state.message
      })
    }).then(res => {
      console.log("result:-", res);
      this.setState({
        name: [],
        message: []
      });
    });
  }
  render() {
    return (
      <div className="ui container right">
        <form onSubmit={this.handleSubmit}>
          <Text
            className="ui basic input"
            name="name"
            placeholder="name"
            value={this.name}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <Text
            className="ui input"
            name="message"
            placeholder="message"
            value={this.state.message}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <Button className="ui primary button" type="submit">
            Send
          </Button>
        </form>
      </div>
    );
  }
}
