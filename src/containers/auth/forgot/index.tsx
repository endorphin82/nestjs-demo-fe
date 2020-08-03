import React from 'react';
import {connect} from 'react-redux';

import './styles.scss';
import {IRootState} from '../../../redux/reducers/state';
import {Dispatch} from 'redux';
import {IForgot} from '../../../types';
import {ForgotActions} from '../../../redux/actions';
import ForgotForm from '../../../components/auth/forgot/forgotForm';

type IForgotContainerProps = ReturnType<typeof mapDispatchToProps>;

function ForgotContainer(props: IForgotContainerProps) {
  return (
    <div className="login-form-container">
      <ForgotForm handleSubmit={props.forgot} handleError={console.error}/>
    </div>
  )
}

const mapStateToProps = (state: IRootState) => ({});
const mapDispatchToProps = (dispatch: Dispatch) => ({
  forgot: (payload: IForgot) => dispatch(ForgotActions.forgot(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ForgotContainer);
