//! Due to the asyncronous nature of state, it is imperitive that an update method do not refer to `this.state` or `this.props`
//* Instead, pass a function with state &| props as parameters.

//! Do NOT
//! this.setState({
//!   counter: this.state.counter + this.props.increment
//! });

//* Do
//* this.setState((state, props) => ({
//*   counter: state.counter + props.increment
//* }));

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false,
    };
    // change code below this line
    this.toggleVisibility = this.toggleVisibility.bind(this);
    // change code above this line
  }
  // change code below this line
  toggleVisibility() {
    this.setState((state) => {
      if (state.visibility === true) {
        return { visibility: false };
      } else {
        return { visibility: true };
      }
    });
  }
  // change code above this line
  render() {
    if (this.state.visibility) {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
          <h1>Now you see me!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
        </div>
      );
    }
  }
}
