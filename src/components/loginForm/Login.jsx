import React from "react";
import Logo from "../../images/The-Green-280x210.png";
import FetchAPI from "../FetchAPI";

export class Login extends React.Component {
  render() {
    return (
      <div className="baseContainer" ref={this.props.containerRef}>
        <div className="header"></div>
        <div className="content">
          <div className="image">
            <img src={Logo} alt="logo" />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="Username" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="Password" />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn">
            Login
          </button>
          <FetchAPI />
        </div>
      </div>
    );
  }
}
