import { useContext } from 'react';

import { AppContext } from '..';

export default ({ description, date, category }) => {

  const context = useContext(AppContext);

  const { classess } = context;
  const { list, listElement } = classess;

  return (
    <li className={`${list}__${listElement}`}><span>{description}</span> <span>{date}</span> <span>{category}</span><button>&times;</button></li>
  )
};