import React, { useContext } from "react";
import { AddButton, AppContext, CurrentDate } from "..";

import { useInput } from '../Functions';

export default () => {
  const context = useContext(AppContext);

  const [eventName, handleChangeEventName] = useInput();

  const { classess } = context;
  const { topMenu } = classess;

  return (
    <nav className={topMenu}>
      <CurrentDate />

      <AddButton />
    </nav>
  )
}