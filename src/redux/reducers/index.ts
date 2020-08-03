/* eslint-disable @typescript-eslint/no-namespace */
import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import {UserReducer} from './user';
import {IRootState} from './state';
import {AuthReducer} from './auth';
import {ForgotReducer} from './forgot';

// NOTE: current type definition of Reducer in 'redux-actions' module
// doesn't go well with redux@4
const rootReducer = combineReducers<IRootState>({
  router: routerReducer,
  user: UserReducer as any,
  auth: AuthReducer as any,
  forgot: ForgotReducer as any,
});

export default rootReducer;
