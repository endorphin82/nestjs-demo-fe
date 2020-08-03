import {createAction} from 'redux-actions';
import {IForgot} from '../../types/auth';

enum Type {
  FORGOT = 'FORGOT',
}

const forgot = createAction<IForgot>(Type.FORGOT);


export const ForgotActions = {
  Type,

  forgot
}

export type ForgotActions = Omit<typeof ForgotActions, 'Type'>;
