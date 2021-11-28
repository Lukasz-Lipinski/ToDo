import { createContext } from 'react';

export const context = {
  classess: {
    app: "app",
    list: "list",
    listElement: "listElement",
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
    "Urgent"
  ],
  sidebarLinks: [
    { name: "Urgent" },
    { name: "Home" },
    { name: "Today" },
    { name: "Job" },
    { name: "Tasks" },
  ]
};

const AppContext = createContext(context);
export default AppContext;
