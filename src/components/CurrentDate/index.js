import { useMemo } from 'react';

export default () => {

  const todayDate = useMemo(() => {
    const date = new Date();
    return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
  }, []);

  return (
    <span>Today: {todayDate}</span>
  )
}