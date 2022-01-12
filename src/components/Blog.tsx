import React from "react";
import axios from "axios";

export class Blog extends React.Component {
  constructor(props: any) {
    super(props);

    this.state = {
      title: null,
      body: null
    };
  }
  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/posts`).then((res) => {
      console.log(this.props.match);
      const blog = res.data[parseInt(this.props.match.params.id) - 1];
      //this.setState({ blog });
      this.setState({ title: blog.title, body: blog.body });
    });
  }

  render() {
    return (
      <div>
        <div>title : {this.state.title}</div>
        <div>body : {this.state.body}</div>
      </div>
    );
  }
}
