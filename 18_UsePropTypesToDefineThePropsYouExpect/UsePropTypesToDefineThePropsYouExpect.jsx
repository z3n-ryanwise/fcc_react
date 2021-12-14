// Define requires property types. 
//* Refer https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes
// This is more like a type hint rather than a strict type requirement, it will throw an error.

const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
};

// Change code below this line
Items.propTypes = {
  quantity: PropTypes.number.isRequired
}
// Change code above this line

Items.defaultProps = {
  quantity: 0
};

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Items />
  }
};