import { useContext } from 'react';
import { connect } from 'react-redux';

import { AppContext } from '..';
import { setNewList, setAsDone } from '../MainView/redux';

import { GiCheckMark } from 'react-icons/gi';

const mapStateToProps = (state) => ({
  elementsList: state.list.list
});
const mapDispatchToProps = (dispatch) => ({
  setNewList: (newList) => dispatch(setNewList(newList)),
  addToDoneList: (doneList) => dispatch(setAsDone(doneList))
});

export default connect
  (mapStateToProps,
    mapDispatchToProps)
  (({ description, date, category, id, elementsList, setNewList, addToDoneList }) => {

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
    }

    return (
      <li className={`${list}__${listElement}`}>
        <div>
          <span>{description}</span> <span>{date}</span> <span>{category}</span>
        </div>
        <div>
          <button id={id} onClick={handleSelect} ><GiCheckMark /></button>
          <button id={id} onClick={deleteElement}>&times;</button>
        </div>
      </li>
    )
  });