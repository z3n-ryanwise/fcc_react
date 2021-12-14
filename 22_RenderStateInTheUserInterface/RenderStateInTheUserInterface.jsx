// A stateful componant can always access state from within its render componant
//* State can change, and when it does it updates the ShadowDOM and triggers a re-render of effected components

//! Statful components fully encapsulate their state, no other components are aware of the state changes within it.

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp'
    }
  }
  render() {
    return (
      <div>
        { /* Change code below this line */ }
        <h1>{this.state.name}</h1>
        { /* Change code above this line */ }
      </div>
    );
  }
};