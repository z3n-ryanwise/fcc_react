//! The call to constructor is not required post es6

class MyComponent extends  React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>My First React Component!</h1>
      </div>
    )
  }
}

const targetNode = document.getElementById("challenge-node")

ReactDOM.render(<MyComponent />, targetNode)