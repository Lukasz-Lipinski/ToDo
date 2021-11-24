import { useContext } from 'react';

import { AppContext, TopMenu, List } from '..';

const mapStateToProps = () => ({});
const mapDispatchToProps = () => ({});

export default () => {
  const context = useContext(AppContext);
  const { classess } = context;

  return (
    <div className={classess.container}>
      <TopMenu />
      <List>
        elementy listy
      </List>
    </div>
  )
};