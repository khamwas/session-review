import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./ducks/store";
import routes from "./routes";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">{routes}</div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
