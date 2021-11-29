import { returnTodayDate } from '../Functions';

export default () => {

  const todayDate = returnTodayDate();

  return (
    <span>Today: {todayDate}</span>
  )
}