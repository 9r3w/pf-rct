import React from "react";
import axios from "axios";

interface MyState {
  title: string;
  body: string;
}

export class Blog extends React.Component<any, MyState> {
  constructor(props: any) {
    super(props);

    this.state = {
      title: "",
      body: ""
    };
  }
  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/posts`).then((res) => {
      console.log(this.props.match);
      const blog = res.data[parseInt(this.props.match.params.id, 10) - 1];
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
