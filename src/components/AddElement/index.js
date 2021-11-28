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
  addElementToList: ({ element, date }) => dispatch(addElement({ element, date }))
});

export default connect
  (mapStateToProps,
    mapDispatchToProps)
  (({ setAddElementWindowOnFalse, addElementToList, addedElement }) => {
    const context = useContext(AppContext);

    const [eventName, handleChangeEventName] = useInput();
    const [choseDate, handleSelectChoseDate] = useInput();

    const { classess } = context;
    const { addElementWindow } = classess;

    const sendData = () => {
      addElementToList({ element: eventName, date: choseDate });
    };

    return (
      <div className={addElementWindow}>
        <div><span onClick={setAddElementWindowOnFalse} className={`${addElementWindow}__closeBtn`}>&times;</span></div>

        <div className={`${addElementWindow}__form`}>

          <label htmlFor="eventName">Name</label>
          <input id="eventName" type="text" value={eventName} onChange={handleChangeEventName} required />
          <label htmlFor="date">Date</label>
          <input type="date" value={choseDate} onChange={handleSelectChoseDate} required />

          <fieldset>
            <legend>Category</legend>
            <label htmlFor="urgent">Urgent</label>
            <input type="radio" id="urgent" name="category" value="Urgent" />

            <label htmlFor="today">Today</label>
            <input type="radio" id="today" name="category" value="Today" />

            <label htmlFor="home">Home</label>
            <input type="radio" id="home" name="category" value="Home" />

            <label htmlFor="shopping">Shopping</label>
            <input type="radio" id="shopping" name="category" value="Shopping" />
          </fieldset>
        </div>

        <div><button onClick={sendData}>Add</button></div>
      </div>
    )
  })