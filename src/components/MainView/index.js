import { useContext } from 'react';
import { connect } from 'react-redux';

import { AppContext, TopMenu, List } from '..';

const mapStateToProps = (state) => ({
  amountOfListElements: state.list.list.length
});
const mapDispatchToProps = () => ({});

export default connect
  (mapStateToProps,
    mapDispatchToProps)
  (({ amountOfListElements }) => {
    const context = useContext(AppContext);
    const { classess } = context;

    const showList = () => {
      if (amountOfListElements) return <List />
      return null;
    };

    return (
      <div className={classess.container}>
        <TopMenu />
        {showList()}
      </div>
    )
  })