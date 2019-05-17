import React, { Component } from "react";
import Auth from "./Components/Auth/Auth";
import Nav from "./Components/Nav/Nav";
import Post from "./Components/Post/Post";
import Dashboard from "./Components/Dashboard/Dashboard";
import Form from "./Components/Form/Form";
import routes from "./routes";
import { withRouter } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    console.log(this.props.location.pathname);
    return (
      <div className="App">
        {this.props.location.pathname === "/" ? <div /> : <Nav />}

        {routes}
      </div>
    );
  }
}

export default withRouter(App);
