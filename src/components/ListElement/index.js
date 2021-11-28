import { useContext } from 'react';

import { AppContext } from '..';

export default ({ description, date }) => {

  const context = useContext(AppContext);

  const { classess } = context;
  const { list, listElement } = classess;

  return (
    <li className={`${list}__${listElement}`}>{description} {date}</li>
  )
};