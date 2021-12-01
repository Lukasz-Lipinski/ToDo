import { createContext } from 'react';

export const context = {
  classess: {
    app: "app",
    list: "list",
    listElement: "listElement",
    doneListElement: "doneListElement",
    addButton: "addButton",
    container: "container",
    topMenu: "topMenu",
    addElementWindow: "addElementWindow",
    sidebar: "sidebar",
    sidebarElement: "sidebarElement"
  },
  categoryList: [
    "Home",
    "Job",
    "Tasks",
    "Today",
    "Urgent",
    "Done"
  ],
  sidebarLinks: [
    { name: "All" },
    { name: "Urgent" },
    { name: "Home" },
    { name: "Today" },
    { name: "Job" },
    { name: "Tasks" },
    { name: "Done" },
  ]
};

const AppContext = createContext(context);
export default AppContext;
