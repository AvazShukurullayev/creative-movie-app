import React, { Component } from "react";
import { Header, Main, Footer } from "./layouts";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="app">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
