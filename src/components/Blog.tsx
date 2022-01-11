import React, { Component } from "react";

export class Blog extends React.Component {
  render() {
    const params = this.props.match;
    const id = parseInt(params.params.id, 10);
    return <div>id : {id} </div>;
  }
}
