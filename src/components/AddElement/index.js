import React, { useContext } from "react";
import { connect } from "react-redux";
import { AppContext } from "..";

import { useInput, returnTodayDate } from '../Functions';
import { hideAddElementWindow, addElement } from '../MainView/redux';
import { isAddedTrue } from '../Snackbar/redux';

const mapStateToProps = (state) => ({
  addedElement: state.list.list
});

const mapDispatchToProps = (dispatch) => ({
  setAddElementWindowOnFalse: () => dispatch(hideAddElementWindow()),
  addElementToList: ({ element, date, category }) => dispatch(addElement({ element, date, category })),
  isAddedSetOnTrue: () => dispatch(isAddedTrue())
});

export default connect
  (mapStateToProps,
    mapDispatchToProps)
  ((props) => {
    const context = useContext(AppContext);
    const { classess, categoryList } = context;
    const { addElementWindow } = classess;


    const todayDate = returnTodayDate();

    const [eventName, handleChangeEventName] = useInput();
    const [choseDate, handleSelectChoseDate] = useInput(todayDate);
    const [category, handleSelectCategory] = useInput(categoryList[0]);

    const {
      setAddElementWindowOnFalse,
      addElementToList,
      isAddedSetOnTrue,
    } = props;

    const sendData = () => {
      addElementToList({ element: eventName, date: choseDate, category });
      isAddedSetOnTrue();
    };

    return (
      <div className={addElementWindow}>
        <div><button onClick={setAddElementWindowOnFalse} className={`${addElementWindow}__closeBtn`}>&times;</button></div>

        <form className={`${addElementWindow}__form`}>

          <label htmlFor="eventName">Name</label>
          <input id="eventName" type="text" value={eventName} onChange={handleChangeEventName} required />

          <label htmlFor="date">Date</label>
          <input id="date" type="date" value={choseDate} onChange={handleSelectChoseDate} required checked />

          <fieldset onChange={handleSelectCategory}>
            <legend>Category</legend>

            <div>
              {categoryList.map((category, index) => {
                if (index === 0) {
                  return (
                    <React.Fragment key={`radio--element--${index}`}>
                      <label htmlFor={category}>{category}</label>
                      <input type="radio" id={category} name="category" value={category} defaultChecked />
                    </React.Fragment>
                  )
                } else {
                  return (
                    <React.Fragment key={`radio--element--${index}`}>
                      <label htmlFor={category}>{category}</label>
                      <input type="radio" id={category} name="category" value={category} />
                    </React.Fragment>
                  )
                }
              })}

            </div>

          </fieldset>
        </form>

        <div><button className={`${addElementWindow}__form__addBtn`} onClick={sendData}>Add</button></div>
      </div>
    )
  })