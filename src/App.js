import { connect } from 'react-redux';

import { AddElement, AppContext, MainView } from './components';
import { context } from './components/AppContext';

import "./styles/index.scss";

function App() {
  return (
    <div className="App">
      <AppContext.Provider value={context}>
        <MainView />
        <AddElement />
      </AppContext.Provider>
    </div >

  );
};

const mapStateToProps = () => ({

});

const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(App);
