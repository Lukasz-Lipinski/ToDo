import { useContext } from 'react';
import { AppContext } from '..';


export default (props) => {
  const context = useContext(AppContext);

  const { classess } = context;
  const { list, doneListElement } = classess;

  const {
    description,
    date,
    category,
    id
  } = props;

  return (
    <li className={`${list}__${doneListElement}`}>
      <span>{description}</span> <span>{date}</span> <span>{category}</span>
    </li>
  )
}