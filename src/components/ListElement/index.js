import { useContext } from 'react';

import { AppContext } from '..';

export default ({ description, date, category }) => {

  const context = useContext(AppContext);

  const { classess } = context;
  const { list, listElement } = classess;

  return (
    <li className={`${list}__${listElement}`}>
      <div>
        <span>{description}</span> <span>{date}</span> <span>{category}</span>
      </div>
      <div>
        <button>&times;</button>
      </div>
    </li>
  )
};