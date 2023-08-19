import React, { Component } from "react";

class Loader extends Component {
  state = {};
  render() {
    return (
      <div className="text-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
}

export default Loader;
