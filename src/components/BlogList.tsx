import { Link } from "react-router-dom";
import axios from "axios";
import React from "react";

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
          {this.state.blogs.map((blog, key) => (
            <li key={key}>
              <Link to={"/Blog/" + blog["id"]}>
                {blog["id"] + " : " + blog["title"]}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
