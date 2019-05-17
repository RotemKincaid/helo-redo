import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./Nav.scss";

class Nav extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="nav-main">
        <nav>
          <button>
            <Link to="/dashboard">Home</Link>
          </button>
          <button>
            <Link to="/post/:postid">New Post</Link>
          </button>
          <button>
            <Link to="/">Logout</Link>
          </button>
        </nav>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Nav);
