import { connect } from "react-redux";
import { useContext, useCallback } from 'react';

import { ListElement } from '../';
import AppContext from "../AppContext";

const mapStateToProps = (state) => ({
  taskList: state.list.list,
  filterCondition: state.list.filterCondition
});
const mapDispatchToProps = (dispatch) => ({});

export default connect
  (mapStateToProps,
    mapDispatchToProps)
  (({ taskList, filterCondition }) => {
    const context = useContext(AppContext);

    const { classess } = context;
    const { list } = classess;

    const FilterList = useCallback(
      (list, filterCondition) => {
        const unfilteredList = list;

        switch (filterCondition) {
          case "All":
            return unfilteredList.map((task, index) => (<ListElement key={`list--element--${index}`} description={task.element} date={task.date} category={task.category} />));;
          case "Urgent":
            return unfilteredList.filter((element) => element.category === "Urgent").map((task, index) => (<ListElement key={`list--element--${index}`} description={task.element} date={task.date} category={task.category} />));
          case "Home":
            return unfilteredList.filter((element) => element.category === "Home").map((task, index) => (<ListElement key={`list--element--${index}`} description={task.element} date={task.date} category={task.category} />));
          case "Today":
            return unfilteredList.filter((element) => element.category === "Today").map((task, index) => (<ListElement key={`list--element--${index}`} description={task.element} date={task.date} category={task.category} />));
          case "Job":
            return unfilteredList.filter((element) => element.category === "Job").map((task, index) => (<ListElement key={`list--element--${index}`} description={task.element} date={task.date} category={task.category} />));
          case "Tasks":
            return unfilteredList.filter((element) => element.category === "Tasks").map((task, index) => (<ListElement key={`list--element--${index}`} description={task.element} date={task.date} category={task.category} />));
          default:
            return unfilteredList
        }
      },
      [taskList, filterCondition],
    )

    return (
      <ul className={list}>
        {
          FilterList(taskList, filterCondition)
        }
      </ul>
    )
  })