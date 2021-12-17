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
    sidebarElement: "sidebarElement",
    snackbarInfo: "snackbar--info",
    snackbarDone: "snackbar--done",
  },
  snackbar: {
    info: "Position was added",
    done: "Done!",
  },
  categoryList: [
    "Home",
    "Job",
    "Tasks",
    "Today",
    "Urgent",
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

export default createContext(context);

