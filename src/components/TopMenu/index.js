import React, { useContext } from "react";
import { AddButton, AppContext, CurrentDate } from "..";

export default () => {
  const context = useContext(AppContext);

  const { classess } = context;
  const { topMenu } = classess;

  return (
    <nav className={topMenu}>
      <CurrentDate />
      <AddButton />
    </nav>
  )
}