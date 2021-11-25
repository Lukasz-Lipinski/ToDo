import { connect } from "react-redux";
import { showAddElementWindow } from '../MainView/redux';

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
  setAddElementWindowOnTrue: () => dispatch(showAddElementWindow())
});

export default connect
  (mapStateToProps,
    mapDispatchToProps)
  (({ setAddElementWindowOnTrue }) => {
    return (
      <button onClick={setAddElementWindowOnTrue}>Add Element</button>
    )
  });