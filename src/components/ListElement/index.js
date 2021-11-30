import { useContext } from 'react';
import { connect } from 'react-redux';

import { AppContext } from '..';
import { setNewList } from '../MainView/redux';

const mapStateToProps = (state) => ({
  elementsList: state.list.list
});
const mapDispatchToProps = (dispatch) => ({
  setNewList: (newList) => dispatch(setNewList(newList))
});

export default connect
  (mapStateToProps,
    mapDispatchToProps)
  (({ description, date, category, id, elementsList, setNewList }) => {

    const context = useContext(AppContext);

    const { classess } = context;
    const { list, listElement } = classess;

    const deleteElement = (e) => {
      const id = parseInt(e.target.id);

      const newList = elementsList.filter(element => element.id !== id);

      setNewList(newList);
    }

    return (
      <li className={`${list}__${listElement}`}>
        <div>
          <span>{description}</span> <span>{date}</span> <span>{category}</span>
        </div>
        <div>
          <button id={id} onClick={deleteElement}>&times;</button>
        </div>
      </li>
    )
  });