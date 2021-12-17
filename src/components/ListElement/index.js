import { useContext } from 'react';
import { connect } from 'react-redux';

import { AppContext } from '..';
import { setNewList, setAsDone } from '../MainView/redux';
import { isDoneTrue } from '../Snackbar/redux';

import { VscCheck, VscChromeClose } from 'react-icons/vsc';
import { returnTodayDate } from '../Functions';

const mapStateToProps = (state) => ({
  elementsList: state.list.list
});
const mapDispatchToProps = (dispatch) => ({
  setNewList: (newList) => dispatch(setNewList(newList)),
  addToDoneList: (doneList) => dispatch(setAsDone(doneList)),
  isDoneSetTrue: () => dispatch(isDoneTrue())
});

export default connect
  (mapStateToProps,
    mapDispatchToProps)
  ((props) => {
    const {
      description,
      date,
      category,
      id,
      elementsList,
      setNewList,
      addToDoneList,
      isDoneSetTrue
    } = props;

    const context = useContext(AppContext);

    const { classess } = context;
    const { list, listElement } = classess;

    const deleteElement = (e) => {
      const id = parseInt(e.target.id);

      const newList = elementsList.filter(element => element.id !== id);
      setNewList(newList);
    };

    const handleSelect = (e) => {
      const targetID = parseInt(e.target.id);

      const doneList = elementsList.filter(doneElement => doneElement.id === targetID);
      addToDoneList(doneList);

      const newListWithoutDoneElements = elementsList.filter(undoneElements => undoneElements.id !== targetID);
      setNewList(newListWithoutDoneElements);

      isDoneSetTrue();
    };

    const compareDates = () => {
      const today = returnTodayDate();
      if(today===date) return "Equal";
      if(today>date) return "Less";
      return "More";
    };

    return (
      <li className={`${list}--${listElement}`}>
        <div className={`${list}--${listElement}__details`}>
          <span>{description}</span> <span className={`comparedDates--${compareDates()}`}>{date}</span> <span>{category}</span>
        </div>
        <div>
          <VscCheck id={id} onClick={handleSelect} />
          <VscChromeClose id={id} onClick={deleteElement} />
        </div>
      </li>
    )
  });