import React from 'react';
import {connect} from 'react-redux';

import './styles.scss';
import {IRootState} from '../../../redux/reducers/state';
import {Dispatch} from 'redux';
import {INewpass} from '../../../types';
import {NewPassActions} from '../../../redux/actions';
import NewpassForm from '../../../components/auth/newpass/newpassForm';

type INewPassContainerProps = ReturnType<typeof mapDispatchToProps>;

function NewPassContainer(props: INewPassContainerProps) {
  return (
    <div className="login-form-container">
      <NewpassForm handleSubmit={props.newpass} handleError={console.error}/>
    </div>
  )
}

const mapStateToProps = (state: IRootState) => ({});
const mapDispatchToProps = (dispatch: Dispatch) => ({
  newpass: (payload: INewpass) => dispatch(NewPassActions.newpass(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewPassContainer);
