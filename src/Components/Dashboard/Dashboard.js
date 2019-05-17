import React, { Component } from "react";
import { connect } from "react-redux";
import "./Dashboard.scss";

class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      searchValue: "",
      posts: []
    };
  }
  render() {
    const { username, profile_pic } = this.props;
    const mappedPosts = this.state.posts.map(post => {
      return (
        <div>
          <h1>{post.title}</h1>
          <h3>{username}</h3>
          <img src={profile_pic} />
        </div>
      );
    });
    return (
      <div className="dash-main">
        <div className="dash-inner">
          <div className="dashboard-search">
            <input
              className="search-input"
              placeholder="search by Title"
              value={this.state.searchValue}
            />
            <button>Search</button>
            <button>Reset</button>
            <input type="checkbox" />
          </div>
          <div className="bottom-container">
            <div>Ducks</div>
            <div>Testing</div>
            <div>Games</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
