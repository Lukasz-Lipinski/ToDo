import { useContext } from 'react';
import { connect } from 'react-redux';

import { AppContext, TopMenu, List } from '..';

const mapStateToProps = (state) => ({
  showList: state.list.list.length
});
const mapDispatchToProps = () => ({});

export default connect
  (mapStateToProps,
    mapDispatchToProps)
  (({ showList }) => {
    const context = useContext(AppContext);
    const { classess } = context;

    return (
      <div className={classess.container}>
        <TopMenu />
        {showList ? <List /> : null}
      </div>
    )
  })