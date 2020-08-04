import {createAction} from 'redux-actions';
import {INewpass} from '../../types/auth';

enum Type {
  NEW_PASS = 'NEW_PASS',
}

const newpass = createAction<INewpass>(Type.NEW_PASS);


export const NewPassActions = {
  Type,

  newpass
}

export type NewPassActions = Omit<typeof NewPassActions, 'Type'>;
