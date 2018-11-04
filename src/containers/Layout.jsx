import React, { Component } from "react";
import Footer from "../components/Footer";
class Layout extends Component {
  render() {
    return (
      <div>
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default Layout;
