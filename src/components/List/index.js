import { connect } from "react-redux";

import { ListElement } from '../';

const mapStateToProps = (state) => ({
  taskList: state.list.list
});
const mapDispatchToProps = (dispatch) => ({});

export default connect
  (mapStateToProps,
    mapDispatchToProps)
  (({ taskList }) => {
    return (
      <ul>
        {
          taskList.map((task, index) => <ListElement key={`list--element--${index}`} description={task.element} />)
        }
      </ul>
    )
  })