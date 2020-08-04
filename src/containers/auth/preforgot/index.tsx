import React from 'react';
import {connect} from 'react-redux';

import './styles.scss';
import {IRootState} from '../../../redux/reducers/state';
import {Dispatch} from 'redux';
import {IForgot} from '../../../types';
import PreforgotForm from "../../../components/auth/preforgot/preforgotForm";
import {ForgotActions} from "../../../redux/actions/forgot";

type IPreForgotContainerProps = ReturnType<typeof mapDispatchToProps>;

function PreForgotContainer(props: IPreForgotContainerProps) {
  return (
    <div className="login-form-container">
      <PreforgotForm handleSubmit={props.forgot} handleError={console.error}/>
    </div>
  )
}

const mapStateToProps = (state: IRootState) => ({});
const mapDispatchToProps = (dispatch: Dispatch) => ({
  forgot: (payload: IForgot) => dispatch(ForgotActions.forgot(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PreForgotContainer);
