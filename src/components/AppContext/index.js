import { createContext } from 'react';

export const context = {
  classess: {
    app: "app",
    list: "list",
    listElement: "listElement",
    addButton: "addButton",
    container: "container",
    topMenu: "topMenu",
    addElementWindow: "addElementWindow"
  }
};

const AppContext = createContext(context);
export default AppContext;
