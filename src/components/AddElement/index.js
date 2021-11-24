import React, { useContext } from "react";
import { AddButton, AppContext } from "..";

import { useInput } from '../Functions';

export default () => {
  const context = useContext(AppContext);

  const [eventName, handleChangeEventName] = useInput();

  const { classess } = context;
  const { addElementWindow } = classess;

  const onSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <form onSubmit={onSubmit} className={addElementWindow}>
      <label htmlFor="#eventName">Name</label>
      <input id="eventName" type="text" value={eventName} onChange={handleChangeEventName} />
      <label htmlFor="#date">Date</label>
      <input type="date" />

      <AddButton />
    </form>
  )
}