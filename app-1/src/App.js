import React, { Component } from "react";
import "./App.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }
  onChangeHandler(e) {
    console.log(e.target.value);
    this.setState({ text: e.target.value });
  }

  render() {
    return (
      <div className="App">
        <div>
          <input onChange={this.onChangeHandler} type="text" />
          <p>{this.state.text}</p>
        </div>
      </div>
    );
  }
}

export default App;
