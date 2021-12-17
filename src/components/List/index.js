import { connect } from "react-redux";
import { useContext, useCallback, useEffect, useMemo } from 'react';

import { ListElement } from '../';
import AppContext from "../AppContext";
import DoneElement from "../DoneElement";

const mapStateToProps = (state) => ({
  taskList: state.list.list,
  filterCondition: state.list.filterCondition,
  doneList: state.list.doneList,
  filterConditionDate: state.list.filterConditionDate,
  isFilterDate: state.list.isFilterDate
});
const mapDispatchToProps = (dispatch) => ({});

export default connect
  (mapStateToProps,
    mapDispatchToProps)
  ((props) => {

    const {
      taskList,
      filterCondition,
      doneList,
      filterConditionDate,
      isFilterDate
    } = props;

    const context = useContext(AppContext);

    const { classess } = context;
    const { list } = classess;

    const FilterList = ({ taskList, doneList, filterCondition, filterConditionDate , isFilterDate}) => {
      
      const listElement = (task, index) => <ListElement key={`list--element--${index}`} description={task.element} date={task.date} category={task.category} id={task.id} />
      const doneListElement = (task, index) => <DoneElement key={`doneList--element--${index}`} description={task.element} date={task.date} category={task.category} id={task.id} />

      const newListAllElements = taskList.filter(undone => undone.done !== true);
      const newListForCheckingCategory = (category) => taskList.filter(element => element.category === category).map((task, index) => listElement(task, index));
      const newListForCheckingCategoryAndDate = (category) => taskList.filter(element => element.category === category).filter(element => element.date === filterConditionDate).map((task, index) => listElement(task, index));
      switch (filterCondition) {
        case "All":
          if(isFilterDate) {
            return newListAllElements.filter(undone => undone.date === filterConditionDate ).map((task, index) => listElement(task, index));
          } 
          return newListAllElements.map((task, index) => listElement(task, index)); 
        case "Urgent":
          if(isFilterDate) {
            return newListForCheckingCategoryAndDate("Urgent");
          }
          return newListForCheckingCategory("Urgent");
        case "Home":
          if(isFilterDate) {
            return newListForCheckingCategoryAndDate("Home");
          }
          return newListForCheckingCategory("Home");
        case "Today":
          if(isFilterDate) {
            return newListForCheckingCategoryAndDate("Today");
          }
          return newListForCheckingCategory("Today");
        case "Job":
          if(isFilterDate) {
            return newListForCheckingCategoryAndDate("Job");
          }
          return newListForCheckingCategory("Job");
        case "Tasks":
          if(isFilterDate) {
            return newListForCheckingCategoryAndDate("Tasks");
          }
          return newListForCheckingCategory("Tasks");
        case "Done":
          if(isFilterDate) {
            return doneList.filter(element => element.date === filterConditionDate).map((task, index) => doneListElement(task, index));
          }
          return doneList.map((task, index) => doneListElement(task, index));
        default:
          return taskList;
      };
    };

    const filterConditions = useMemo(() => ({
      taskList,
      doneList,
      filterCondition,
      filterConditionDate,
      isFilterDate
    }), [taskList, filterCondition, doneList, filterConditionDate, isFilterDate]);

    return (
      <ul className={list}>
        {
          FilterList(filterConditions)
        }
      </ul>
    )
  })