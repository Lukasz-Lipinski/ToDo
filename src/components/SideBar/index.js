import React, { useContext } from "react";

import { AppContext } from "..";

export default () => {

  const context = useContext(AppContext);
  const { sidebarLinks, classess } = context;
  const { sidebar, sidebarElement } = classess;

  return (
    <nav className={sidebar}>
      <div>
        <ul>
          {sidebarLinks.map((link, index) => (
            <li key={`sidebar--links--${index}`}>
              <a className={`${sidebar}__${sidebarElement}`}>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}