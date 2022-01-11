import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import axios from "axios";
import React from "react";
import { render } from "react-dom";

export class BlogList extends React.Component {
  state = {
    blogs: []
  };
  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/posts`).then((res) => {
      const blogs = res.data;
      this.setState({ blogs });
    });
  }

  render() {
    return (
      <div className="BlogList">
        <ul>
          {this.state.blogs.map((blog) => (
            <li><Link to='/Blog/'+{blog["id"]}>{blog["title"]}</Link></li>
          ))}
        </ul>
      </div>
    );
  }
}
