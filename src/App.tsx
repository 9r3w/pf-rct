import "./styles.css";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

import { Header } from "./components/Header";
import { Blog } from "./components/Blog";
import { BlogList } from "./components/BlogList";
import { Top } from "./components/Top";
import { About } from "./components/About";

export default function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <div>
          <Link to="/Blog">Blog</Link>
        </div>
        <div>
          <Link to="/About">About</Link>
        </div>
        <Switch>
          <Route exact path="/Blog" component={BlogList} />
          <Route exact path="/Blog/:id" component={Blog} />
          <Route path="/About" component={About} />
          <Route path="*" component={Top} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
