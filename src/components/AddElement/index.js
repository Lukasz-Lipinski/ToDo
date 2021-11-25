import React, { useContext } from "react";
import { connect } from "react-redux";
import { AppContext } from "..";

import { returnTodayDate, useInput } from '../Functions';
import { hideAddElementWindow, addElement } from '../MainView/redux';

const mapStateToProps = (state) => ({
  addedElement: state.list.list
});

const mapDispatchToProps = (dispatch) => ({
  setAddElementWindowOnFalse: () => dispatch(hideAddElementWindow()),
  addElementToList: ({ element, date }) => dispatch(addElement({ element, date }))
});

export default connect
  (mapStateToProps,
    mapDispatchToProps)
  (({ setAddElementWindowOnFalse, addElementToList, addedElement }) => {
    const context = useContext(AppContext);

    const [eventName, handleChangeEventName] = useInput();

    const { classess } = context;
    const { addElementWindow } = classess;

    const onSubmit = (e) => {
      e.preventDefault();
    };

    const sendData = () => {
      addElementToList({ element: eventName, date: returnTodayDate });
    }

    return (
      <div className={addElementWindow}>
        <span onClick={setAddElementWindowOnFalse} className={`${addElementWindow}__closeBtn`}>&times;</span>
        <form onSubmit={onSubmit} className={`${addElementWindow}__form`}>
          <label htmlFor="#eventName">Name</label>
          <input id="eventName" type="text" value={eventName} onChange={handleChangeEventName} />
          <label htmlFor="#date">Date</label>
          <input type="date" />

          <button onClick={sendData}>Add</button>
        </form>
      </div>
    )
  })