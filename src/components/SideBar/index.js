import React, { useContext } from "react";
import { connect } from "react-redux";
import { takeConditionToFilter } from '../MainView/redux';

import { AppContext } from "..";

const mapStateToProps = (state) => ({
  checking: state.list.filterCondition
});
const mapDispatchToProps = (dispatch) => ({
  setCondition: (condition) => dispatch(takeConditionToFilter(condition))
});

export default connect
  (mapStateToProps, mapDispatchToProps)
  (({ setCondition }) => {

    const context = useContext(AppContext);
    const { sidebarLinks, classess } = context;
    const { sidebar, sidebarElement } = classess;

    const setFilterCondition = (e) => {
      setCondition(e.target.innerText);
    }

    return (
      <nav className={sidebar}>
        <div>
          <ul>
            {sidebarLinks.map((link, index) => (
              <li key={`sidebar--links--${index}`}>
                <a onClick={setFilterCondition} className={`${sidebar}__${sidebarElement}`}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    )
  });