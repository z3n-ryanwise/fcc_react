import React from "react";

const Createacomponentwithcomposition = () => {
  return (
    <App>
      <Navbar />
      <Dashboard />
      <Footer />
    </App>
  );
};

const Child = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        {/* Change code below this line */}
        <Child />

        {/* Change code above this line */}
      </div>
    );
  }
}
