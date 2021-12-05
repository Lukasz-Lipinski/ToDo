import { useContext } from 'react';
import { connect } from 'react-redux';

import { AppContext, TopMenu, List } from '..';

const mapStateToProps = (state) => ({
  amountOfListElements__Undone: state.list.list.length,
  amountOfListElements__Done: state.list.doneList.length,
});
const mapDispatchToProps = () => ({});

export default connect
  (mapStateToProps,
    mapDispatchToProps)
  (({ amountOfListElements__Undone, amountOfListElements__Done}) => {
    const context = useContext(AppContext);
    const { classess } = context;

    const showList = () => {
      if (amountOfListElements__Undone || amountOfListElements__Done) return <List />
      return null;
    };

    return (
      <div className={classess.container}>
        <TopMenu />
        {showList()}
      </div>
    )
  })