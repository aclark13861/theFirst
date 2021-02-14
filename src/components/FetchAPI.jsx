import React from "react";

class FetchAPI extends React.Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    fetch("/testAPI")
      .then((res) => res.text())
      .then((res) => this.setState({ apiResponse: res }))
      .catch((err) => err);
  }

  componentDidMount() {
    this.callAPI();
  }
  render() {
    return (
      <div className="App">
        <a
          style={{ textDecoration: "none", marginTop: "1vh" }}
          className="btn"
          type="button"
          href={this.state.apiResponse}
          value="Login With Google"
        >
          Login With Google
        </a>
      </div>
    );
  }
}

export default FetchAPI;
