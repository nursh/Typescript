import React, { Component } from "react";

interface HomeProps {
  name: string;
  age: number;
}

class Home extends Component<HomeProps, {}> {
  render() {
    const { name, age } = this.props;
    return (
      <div>
        Hello there, {name}, You are {age} years old right?
      </div>
    );
  }
}

export { Home as default };
