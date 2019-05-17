import React, { Component } from "react";
import { connect } from "react-redux";
import "./Post.scss";
import axios from "axios";

class Post extends Component {
  constructor() {
    super();

    this.state = {
      title: "",
      image_url: "",
      content: ""
    };
  }

  titleHandler = e => {
    this.setState({
      title: e.target.value
    });
  };

  imageHandler = e => {
    this.setState({
      image_url: e.target.value
    });
  };

  contentHandler = e => {
    this.setState({
      content: e.target.value
    });
  };

  createPost = e => {
    const { title, image_url, content } = this.state;
    const { id } = this.props;

    axios.post();
  };

  render() {
    console.log(this.props);

    return (
      <div className="post-main">
        <div className="post-inner">
          <h1>New Post</h1>
          <h3>Title:</h3>
          <input onchange={e => this.titleHandler(e)} />
          <img />
          <h3>Image URL:</h3>
          <input onchange={e => this.imageHandler(e)} />
          <h3>Content:</h3>
          <input onchange={e => this.contentHandler(e)} />
          <button>Post</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Post);
