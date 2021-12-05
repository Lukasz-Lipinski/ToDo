import { connect } from "react-redux";
import { useContext, useCallback, useEffect } from 'react';

import { ListElement } from '../';
import AppContext from "../AppContext";
import DoneElement from "../DoneElement";

const mapStateToProps = (state) => ({
  taskList: state.list.list,
  filterCondition: state.list.filterCondition,
  doneList: state.list.doneList,
});
const mapDispatchToProps = (dispatch) => ({});

export default connect
  (mapStateToProps,
    mapDispatchToProps)
  (({ taskList, filterCondition, doneList }) => {
    const context = useContext(AppContext);

    const { classess } = context;
    const { list } = classess;

    const FilterList = (elementsTickedAsUndone, elementsTickedAsDone, filterCondition) => {
      const unfilteredList = elementsTickedAsUndone;
      const doneList = elementsTickedAsDone;

      switch (filterCondition) {
        case "All":
          return unfilteredList.filter(undone => undone.done !== true).map((task, index) => (<ListElement key={`list--element--${index}`} description={task.element} date={task.date} category={task.category} id={task.id} />));;
        case "Urgent":
          return unfilteredList.filter((element) => element.category === "Urgent").map((task, index) => (<ListElement key={`list--element--${index}`} description={task.element} date={task.date} category={task.category} id={task.id} />));
        case "Home":
          return unfilteredList.filter((element) => element.category === "Home").map((task, index) => (<ListElement key={`list--element--${index}`} description={task.element} date={task.date} category={task.category} id={task.id} />));
        case "Today":
          return unfilteredList.filter((element) => element.category === "Today").map((task, index) => (<ListElement key={`list--element--${index}`} description={task.element} date={task.date} category={task.category} id={task.id} />));
        case "Job":
          return unfilteredList.filter((element) => element.category === "Job").map((task, index) => (<ListElement key={`list--element--${index}`} description={task.element} date={task.date} category={task.category} id={task.id} />));
        case "Tasks":
          return unfilteredList.filter((element) => element.category === "Tasks").map((task, index) => (<ListElement key={`list--element--${index}`} description={task.element} date={task.date} category={task.category} id={task.id} />));
        case "Done":
          return doneList.map((task, index) => (<DoneElement key={`doneList--element--${index}`} description={task.element} date={task.date} category={task.category} id={task.id} />));
        default:
          return unfilteredList
      }
    };

    console.log(doneList);

    return (
      <ul className={list}>
        {
          FilterList(taskList, doneList, filterCondition)
        }
      </ul>
    )
  })