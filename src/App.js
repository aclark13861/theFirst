import "./App.scss";
import React from "react";
import LoginPage from "./components/LoginPage";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <LoginPage />
      </div>
    );
  }
}

export default App;
