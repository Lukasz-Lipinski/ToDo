import React, { Component } from "react";
import AppContext from "../AppContext";

export default class extends Component {

  static contextType = AppContext;

  render() {
    const { msg } = this.props;

    console.log(this.context);
    return (
      <div>
        <span>{msg}</span>
      </div>
    );
  }
}