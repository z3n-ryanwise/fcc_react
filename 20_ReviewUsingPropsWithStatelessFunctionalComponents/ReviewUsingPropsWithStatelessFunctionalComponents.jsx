class CampSite extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    return (
      <div>
        <Camper/>
      </div>
    );
  }
};
// Change code below this line

const Camper = (props) => {
  Camper.defaultProps = {
    name: 'CamperBot'
  }  
  Camper.propTypes = {
    name: PropTypes.string.isRequired
  }
  
  return (
    <p>
      {props.name}
    </p>
  );
}
