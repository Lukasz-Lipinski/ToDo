import React, { Component } from "react";
import AppContext from "../AppContext";
import { connect } from 'react-redux';
import { isAddedFalse, isDoneFalse } from './redux';

import '../../styles/__snackbar.scss';

const mapStateToProps = (state) => ({
  isAdded: state.flags.isAdded,
  isDone: state.flags.isDone
});
const mapDispatchToProps = (dispatch) => ({
  hideSnackbar: () => {
    dispatch(isAddedFalse());
    dispatch(isDoneFalse());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(class extends Component {
    static contextType = AppContext;

    snackbarMsg = this.context.snackbar;
    classess = this.context.classess;

    state = {
      msg: null,
      snackbarStyle: null,
    };
  
    msgContent = () => {
      if(this.props.isAdded) this.setState({ msg: this.snackbarMsg.info, snackbarStyle: this.classess.snackbarInfo });
      if(this.props.isDone) this.setState({ msg: this.snackbarMsg.done, snackbarStyle: this.classess.snackbarDone });
    };

    componentDidMount() {
      this.msgContent();
      setTimeout(() => {
        this.props.hideSnackbar();
      }, 3000);
    };

    componentWillUnmount() {
      clearTimeout();
    };
  
    render() {
      const { msg, snackbarStyle } = this.state;

      return (
        <div className={snackbarStyle}>
          <span>{msg}</span>
        </div>
      );
    }
  }
);