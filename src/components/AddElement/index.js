import React, { useContext } from "react";
import { connect } from "react-redux";
import { AppContext } from "..";

import { useInput } from '../Functions';
import { hideAddElementWindow, addElement } from '../MainView/redux';

const mapStateToProps = (state) => ({
  addedElement: state.list.list
});

const mapDispatchToProps = (dispatch) => ({
  setAddElementWindowOnFalse: () => dispatch(hideAddElementWindow()),
  addElementToList: ({ element, date, category }) => dispatch(addElement({ element, date, category }))
});

export default connect
  (mapStateToProps,
    mapDispatchToProps)
  (({ setAddElementWindowOnFalse, addElementToList }) => {
    const context = useContext(AppContext);

    const [eventName, handleChangeEventName] = useInput();
    const [choseDate, handleSelectChoseDate] = useInput();
    const [category, handleSelectCategory] = useInput();

    const { classess, categoryList } = context;
    const { addElementWindow } = classess;

    const sendData = () => {
      addElementToList({ element: eventName, date: choseDate, category });
    };

    return (
      <div className={addElementWindow}>
        <div><span onClick={setAddElementWindowOnFalse} className={`${addElementWindow}__closeBtn`}>&times;</span></div>

        <div className={`${addElementWindow}__form`}>

          <label htmlFor="eventName">Name</label>
          <input id="eventName" type="text" value={eventName} onChange={handleChangeEventName} required />
          <label htmlFor="date">Date</label>
          <input type="date" value={choseDate} onChange={handleSelectChoseDate} required />

          <fieldset onChange={handleSelectCategory}>
            <legend>Category</legend>

            {categoryList.map((category, index) => (
              <React.Fragment key={`radio--element--${index}`}>
                <label htmlFor={category}>{category}</label>
                <input type="radio" id={category} name="category" value={category} />
              </React.Fragment>
            ))}

          </fieldset>
        </div>

        <div><button onClick={sendData}>Add</button></div>
      </div>
    )
  })