import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PostsIndex from "../components/PostsIndex";
import PostsNew from "../components/PostsNew";
import PostsShow from "../components/PostsShow";
import Layout from "./Layout";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <BrowserRouter>
            <div>
              <Switch>
                <Route path="/posts/new" component={PostsNew} />
                <Route path="/posts/:id" component={PostsShow} />
                <Route path="/" component={PostsIndex} />
              </Switch>
            </div>
          </BrowserRouter>
        </Layout>
      </div>
    );
  }
}

export default App;
