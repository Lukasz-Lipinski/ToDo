import { useCallback } from 'react';

import { connect } from 'react-redux';

import { AddElement, AppContext, MainView } from './components';
import { context } from './components/AppContext';

import "./styles/index.scss";

function App({ setAddElementWindow }) {

  const setComponent = useCallback(
    (flag = false) => {
      if (flag) return <AddElement />
      return <MainView />
    },
    [setAddElementWindow],
  )

  return (
    <div className="App">
      <AppContext.Provider value={context}>
        {
          setComponent(setAddElementWindow)
        }
      </AppContext.Provider>
    </div >

  );
};

const mapStateToProps = (state) => ({
  setAddElementWindow: state.list.showAddElementWindow
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
