import { connect } from "react-redux";
import { useContext } from 'react';

import { ListElement } from '../';
import AppContext from "../AppContext";

const mapStateToProps = (state) => ({
  taskList: state.list.list
});
const mapDispatchToProps = (dispatch) => ({});

export default connect
  (mapStateToProps,
    mapDispatchToProps)
  (({ taskList }) => {
    const context = useContext(AppContext);

    const { classess } = context;
    const { list } = classess;
    return (
      <ul className={list}>
        {
          taskList.map((task, index) => <ListElement key={`list--element--${index}`} description={task.element} date={task.date} />)
        }
      </ul>
    )
  })