import { useContext } from 'react';
import { connect } from 'react-redux';

import { AppContext, TopMenu, List, Snackbar } from '..';

const mapStateToProps = (state) => ({
  amountOfListElements__Undone: state.list.list.length,
  amountOfListElements__Done: state.list.doneList.length,
  isAdded: state.flags.isAdded,
  isDone: state.flags.isDone,
});
const mapDispatchToProps = () => ({});

export default connect
  (mapStateToProps,
    mapDispatchToProps)
  ((props) => {
    const {
      amountOfListElements__Undone,
      amountOfListElements__Done,
      isAdded,
      isDone
    } = props;

    const context = useContext(AppContext);
    const { classess } = context;

    const showList = () => {
      if (amountOfListElements__Undone || amountOfListElements__Done) return <List />
      return null;
    };

    const showSnackbar = () => {
      if(isAdded || isDone) return <div className={`${classess.container}--snackbarContainer`}><Snackbar /></div>
    };

    return (
      <div className={classess.container}>
        <TopMenu />
        {showList()}
        {showSnackbar()}
      </div>
    )
  })