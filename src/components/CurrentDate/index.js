import { useEffect, useContext } from 'react';
import { connect } from 'react-redux';


import { useInput, returnTodayDate } from '../Functions';
import { takeConditionDateToFilter, setIsFilterDate } from '../MainView/redux';
import AppContext from '../AppContext/index';

const mapStateToProps = (state) => ({
});
const mapDispatchToProps = (dispatch) => ({
  dateCondition: (date) => dispatch(takeConditionDateToFilter(date)),
  isFilterDateSetOn: (setting) => dispatch(setIsFilterDate(setting))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(({ dateCondition, condition, isFilterDateSetOn, isFilterDate }) => {

  const context = useContext(AppContext);
  const { classess } = context;
  const { container } = classess;

  const todayDate = returnTodayDate();

  const [ date, handleChangeDate ] = useInput(todayDate);

  useEffect(() => {
    console.log();
    dateCondition(date);
  }, [date, dateCondition, condition]);

  const checkingCheckbox = (e) => {
    isFilterDateSetOn(e.target.checked);
  }

  return (
    <div className={container}>
      <input type="date" value={date} onChange={handleChangeDate} />
      <input type="checkbox" onChange={checkingCheckbox}/>
    </div>
  )
});